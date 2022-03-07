import React from "react";
import axios from 'axios';
import '../css/postlist.css';

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.description}</td>
        <td>{props.post.text}</td>
        <td>{props.post.image}</td>
        <td>{props.post.rating}</td>
        <td>{props.post.tag}</td>
        <td>{props.post.date.substring(0,10)}</td>
    </tr>
)

export default class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {post: []};
    }
    componentDidMount() {
        let loc = this.props.location //should return /posts/id
        loc = "/posts/62255020b9dfcb34f9346786"
        console.log(loc)
        axios.get('http://localhost:5000' + loc)
        .then(response => {
            this.setState({post: response.data})
            console.log({post: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    isImage() {
        if (this.state.post.image != "none") {
            return <img src={this.state.post.image} alt="food image" class="card-img-top card-img"/>;
        }
        else 
            return;
    }

    cuteTag() {
        switch(this.state.post.tag) {
            case "De_Neve":
                return <p>De Neve</p>
                break;
            case "Bruin_Plate":
                return <p>Bruin Plate</p>
                break;
            case "Bruin_Cafe":
                return <p>Bruin Cafe</p>
                break;
            case "The_Study":
                return <p>The Study at Hedrick</p>
                break;
            case "The_Drey":
                return <p>The Drey</p>
                break;
            default:
                <p>{this.state.post.tag}</p>
        }
    }

    render() {
        return (
            <div>
                {this.isImage()}
                <h5> {this.state.post.username}</h5>
                {this.cuteTag()}
                <p>{this.state.post.rating} stars</p>
                <p> {this.state.post.text}</p>
                <p>Liked by {this.state.post.likes} people</p>
                <p>Comment Section: {this.state.post.comments}</p>
                <div>
                        <label for="text" class="visually-hidden">Leave a Comment</label>
                        <textarea
                            type="text"
                            id="description"
                            class="form-control"
                            placeholder="Enter Comment Here"
                            required
                            value={this.state.text}
                            onChange={this.onChangeText}
                            rows="3"
                        >
                        </textarea>
                    </div>
            </div>
        )
    }
}