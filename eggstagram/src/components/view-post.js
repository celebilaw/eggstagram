import React from "react";
import axios from 'axios';
import '../css/postlist.css';
import Rating from '@material-ui/lab/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';


const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.text}</td>
        <td>{props.post.image}</td>
        <td>{props.post.rating}</td>
        <td>{props.post.tag}</td>
        <td>{props.post.date.substring(0,10)}</td>
    </tr>
)

const Comment = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.text}</td>
        <td>{props.post.date.substring(0,10)}</td>
    </tr>
)

export default class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {post: [], 
                    text: "",
                    rating: 0,
                    tag: "",
                    likes: 0,
                    date: "",
                    comments: [], 
                    comment: "", 
                    user_username: "",
                    poster_username: "",
                    image: ""};
        this.onLike = this.onLike.bind(this);
        this.onComment = this.onComment.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
    }
    componentDidMount() {
        let loc = window.location.pathname
        console.log(loc)
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    user_username: response.data[0].username
                })
            }
        })
        axios.get('http://localhost:5000' + loc)
        .then(response => {
            console.log(response.data.text)
            this.setState({comments: response.data.comments})
            this.setState({ text: response.data.text,
                            poster_username: response.data.username,
                            tag: response.data.tag,
                            likes: response.data.likes,
                            rating: response.data.rating,
                            date: response.data.date,
                            image: response.data.image})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //height="500" width="500" class="img-fluid" alt=""
    isImage() {
        if (this.state.image !== "none") {
            return <img src={this.state.post.image} alt="food img" class="card-img-top card-img"/>;
        }
        else 
            return;
    }

    cuteTag() {
        switch(this.state.tag) {
            case "De_Neve":
                return <p>De Neve</p>;
                break;
            case "Bruin_Plate":
                return <p>Bruin Plate</p>;
                break;
            case "Bruin_Cafe":
                return <p>Bruin Cafe</p>;
                break;
            case "The_Study":
                return <p>The Study at Hedrick</p>;
                break;
            case "The_Drey":
                return <p>The Drey</p>;
                break;
            default:
                return <p>{this.state.tag}</p>;
        }
    }

    onChangeComment(desc) {
        this.setState({
            comment: desc.target.value
        });

    }

    onComment(comment) {
        comment.preventDefault();
        let loc = window.location.pathname;
        let split = loc.split('/')
        loc = '/' + split[1] + '/comment/' + split[2];
        console.log(loc)
        axios.post("http://localhost:5000" + loc, {"username": this.state.user_username, "text": this.state.comment, "date": new Date})
        window.location = window.location.pathname;
    }

    onLike(like) {
        like.preventDefault();
        let loc = window.location.pathname;
        let split = loc.split('/')
        loc = '/' + split[1] + '/like/' + split[2];
        console.log(loc)
        axios.post("http://localhost:5000" + loc, {"name": this.state.user_username})
        window.location = window.location.pathname;
    }

    commentList() {
        return this.state.comments.map(currentpost => {
            return <Comment post={currentpost} key={currentpost._id}/>;
        })
    }
    
    getUser(i) {
        let postList = this.commentList();
        let tagList = [];
        postList.forEach(d => tagList.push(d.props.post.username));
        return tagList[i];
    }

    //not necessary unless comment liking is working
    getId(i) {
        let postList = this.commentList();
        let idList = [];
        postList.forEach(d => idList.push(d.props.post._id));
        return idList[i];
    }

    getText(i) {
        let postList = this.commentList();
        let textList = [];
        postList.forEach(d => textList.push(d.props.post.text));
        return textList[i];
    }

    getDate(i) {
        let postList = this.commentList();
        let textList = [];
        postList.forEach(d => textList.push(d.props.post.date));
        return textList[i];
    }

    isComment(i) {
        if (this.state.comments.length > i) {
            return <p> {this.getUser(i)} said: {this.getText(i)} on {(this.getDate(i)).substring(0,10)}</p>
        }
        else {
            return;
        }
    }

    render() {
        return (
            <div>
                <section class="p-3">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-md">
                                {this.isImage()}
                            </div>
                            <div class="col-md p-4 bg-light">
                                <h5 class="fw-bold"> {this.cuteTag()}                 
                                    <div>    
                                        <Rating
                                            name="Rating Label"
                                            value={this.state.rating}
                                            size="large"
                                            sx={{
                                                color: "rating-color"
                                            }}
                                        />
                                    </div>
                                </h5>
                                <p>Posted by {this.state.poster_username} on {(this.state.date).substring(0,10)}</p>
                                <p class="lead"> {this.state.text}</p>
                                <p class="fw-bold">Liked by {this.state.likes} people &nbsp;&nbsp;
                                    <button class="btn btn-primary fw-bold" type="submit" onClick={this.onLike}> <i class="bi bi-hand-thumbs-up"></i>  Like Post </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="p-5 blueSection">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col align-self-center">
                                <p class="text-white fw-bold">Comment Section:</p>
                                {this.isComment(0)}
                                {this.isComment(1)}
                                {this.isComment(2)}
                                {this.isComment(3)}
                                {this.isComment(4)}
                                {this.isComment(5)}
                                {this.isComment(6)}
                                {this.isComment(7)}
                                {this.isComment(8)}              
                                <div class="commentInput">
                                    <label for="text" class="visually-hidden">Leave a Comment</label>
                                    <textarea
                                            type="text"
                                            id="description"
                                            class="form-control"
                                            placeholder="Enter Comment Here"
                                            required
                                            value={this.state.comment}
                                            onChange={this.onChangeComment}
                                            rows="2"
                                    >
                                    </textarea>
                                </div>
                                <button class="btn btn-dark fw-bold" type="submit" onClick={this.onComment}> <i class="bi bi-chevron-right"></i> Submit Comment</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}