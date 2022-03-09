import axios from "axios";
import React from "react";
import "../css/create-post.css";
import Rating from '@material-ui/lab/Rating';

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //basically need additional fields (i assume in render function here) for: 
        //image (can be none as default for now)
        //tag (ie one for each dining place like epicuria, de neve, etc) (i was thinking drop down menu? but idk)
        //rating (1-5 stars or something or just a text field, has to be a number tho)

        this.state = {
            username: "", // get username from database
            text: "",
            image: "",
            tag: "",
            rating: 0,
            date: "",
            likes: 0, // default is 0 bc no likes yet
        }

        document.body.style.backgroundColor = "#8BB8E8";
    }

    // called right before anything is rendered on the webpage
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
    }
    onChangeUsername(user) {
        this.setState({
            username: user.target.value
        });
    }

    onChangeText(desc) {
        this.setState({
            text: desc.target.value
        });
    }

    onChangeImage(img) {
        this.setState({
            image: img.target.value
        });
    }

    onChangeRating(newValue) {
        this.setState({
            rating: newValue
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(submit) {
        submit.preventDefault();

        var dining_tag = document.getElementById("dining-hall-tag");
        var dining_hall_tag = dining_tag.value;

        var imageString = this.state.image;
        if(imageString == "")
            imageString = "none"

        const post = {
            username: this.state.username, // get from database
            text: this.state.text,
            image: imageString,
            tag: dining_hall_tag,
            rating: this.state.rating,
            date: new Date(),
        }

        console.log(post);

        let myToken = localStorage.getItem('jwt')
        if (myToken !== null) {
            axios.post("http://localhost:5000/post", post, { headers: { 'authorization': myToken }})
                .then(res => {
                    console.log(res.data)
                    window.location = "/feed";
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log("not logged in")
        }
    }

    render() {
        return (
            <div class="container-fluid p-2 text-center">
                <form class="text-box post-list mt-3" onSubmit={this.onSubmit}>
                    <h1 class="h3 mb-4 font-weight-normal text-white">Create a Review Post!</h1>
                    <select id="dining-hall-tag" class="mb-4 form-select" aria-label="select-menu" required>
                        <option value="" selected disabled>Choose a Dining Hall</option>
                        {/* value is sent to server */}
                        <option value="Epicuria">Epicuria</option>
                        <option value="De_Neve">De Neve</option>
                        <option value="Feast">Feast</option>
                        <option value="Bruin_Plate">Bruin Plate</option>
                        <option value="Bruin_Cafe">Bruin Cafe</option>
                        <option value="Rendezvous">Rendezvous</option>
                        <option value="The_Study">The Study at Hedrick</option>
                        <option value="The_Drey">The Drey</option>
                    </select>
                    <div className="mb-4">
                        <label for="text" class="visually-hidden">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            class="form-control"
                            placeholder="Enter Description Here"
                            required
                            value={this.state.text}
                            onChange={this.onChangeText}
                            rows="3"
                        >
                        </textarea>
                    </div>
                    <div className="mb-4">
                        <label for="formFile" class="visually-hidden">Image</label>
                        <input
                            type="file"
                            id="formFile"
                            class="form-control"
                            placeholder="Attach an Image (optional)"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="mb-4">
                        <label for="rating" class="form-label rating-font text-white">Rate the food!</label>
                        <br/>
                        <Rating
                            name="Rating Label"
                            value={this.state.rating}
                            size="large"
                            onChange={(event, newValue) => {
                                this.onChangeRating(newValue);
                            }}
                            sx={{
                                color: "rating-color"
                            }}
                        />
                    </div>
                    <div class="mt-4">
                    <button type="submit" class="btn btn-lg post-button btn-block">Submit Review</button>
                    </div>
                </form>
            </div>
        )
    }
}
