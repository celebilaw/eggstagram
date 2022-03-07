import axios from "axios";
import React from "react";
import "../css/create-post.css"

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //basically need additional fields (i assume in render function here) for: 
        //image (can be none as default for now)
        //tag (ie one for each dining place like epicuria, de neve, etc) (i was thinking drop down menu? but idk)
        //rating (1-5 stars or something or just a text field, has to be a number tho)

        var date_string = Date();

        this.state = {
            username: "", // get username from database
            text: "",
            image: "",
            tag: "",
            rating: 0,
            date: date_string,
            likes: 0, // default is 0 bc no likes yet
        }
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

    onChangeTag(tag) {
        this.setState({
            tag: tag.target.value
        });
    }

    onChangeRating(rating) {
        this.setState({
            rating: rating.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(submit) {
        submit.preventDefault();

        const post = {
            username: this.state.username, // get from database
            text: this.state.text,
            image: this.state.image,
            tag: this.state.tag,
            rating: this.state.rating,
            likes: this.state.likes,
            date: this.state.date,
        }

        console.log(post);

        window.location = "/feed";
    }

    render() {
        return (
            <div class="container-fluid p-2">
                <form class="text-box" onSubmit={this.onSubmit}>
                    <h1 class="h3 mb-3 font-weight-normal">Create a Review Post!</h1>
                    <select class="mb-3 form-select" aria-label="select-menu">
                        <option selected disabled>Choose a Dining Hall</option>
                        {/* value is sent to server */}
                        <option value="Epicuria">Epicuria</option>
                        <option value="De Neve">De Neve</option>
                        <option value="Feast">Feast</option>
                        <option value="Bruin Plate">Bruin Plate</option>
                        <option value="Bruin Cafe">Bruin Cafe</option>
                        <option value="Rendezvous">Rendezvous</option>
                        <option value="The Study at Hedrick">The Study at Hedrick</option>
                        <option value="The Drey">The Drey</option>
                    </select>
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
                        <label for="rating" class="visually-hidden">Rating</label>
                        <input
                            type="rating"
                            id="rating"
                            class="form-control"
                            placeholder="Rate the food!"
                            required
                            value={this.state.rating}
                            onChange={this.onChangeRating}
                        />
                    </div>
                    <div className="mb-3 form-control">
                        <label for="date" class="visually-hidden">Date</label>
                        <input
                            type="text"
                            readonly
                            disabled
                            class="form-control-plaintext"
                            value={this.state.date}
                        />
                    </div>
                    <div class="mt-3">
                    <button type="submit" class="btn btn-lg post-button btn-block">Submit Review</button>
                    </div>
                </form>
            </div>
        )
    }
}
