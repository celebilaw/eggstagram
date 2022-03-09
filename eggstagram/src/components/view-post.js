import React from "react";
import axios from 'axios';
import '../css/postlist.css';
import Rating from '@material-ui/lab/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';


// const Post = props => (
//     <tr>
//         <td>{props.post.username}</td>
//         <td>{props.post.text}</td>
//         <td>{props.post.image}</td>
//         <td>{props.post.rating}</td>
//         <td>{props.post.tag}</td>
//         <td>{props.post.date.substring(0,10)}</td>
//     </tr>
// )

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
                    likedBy: [],
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
        let loc = window.location.pathname;
        this.setState({
            user_username: localStorage.getItem('username')
        })
        axios.get('http://localhost:8080' + loc)
        .then(response => {
            console.log(response.data.text)
            this.setState({comments: response.data.comments})
            this.setState({ text: response.data.text,
                            poster_username: response.data.username,
                            tag: response.data.tag,
                            likes: response.data.likes,
                            likedBy: response.data.likedBy,
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
            return <img src={this.state.image} alt="food img" class="card-img-top card-img"/>;
        }
        else 
            return <img src="https://i.imgur.com/Wv0Vmys.jpg" alt="food img" class="card-img-top card-img"/>;
    }

    cuteTag() {
        switch(this.state.tag) {
            case "De_Neve":
                return <p>De Neve</p>;
            case "Bruin_Plate":
                return <p>Bruin Plate</p>;
            case "Bruin_Cafe":
                return <p>Bruin Cafe</p>;
            case "The_Study":
                return <p>The Study at Hedrick</p>;
            case "The_Drey":
                return <p>The Drey</p>;
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
        let myToken = localStorage.getItem("jwt")
        if(myToken != null){
            console.log("commenting")
            axios.post("http://localhost:8080" + loc, {"username": this.state.user_username, "text": this.state.comment, "date": new Date()}, {headers: {'authorization': myToken}})
            .catch(function (error){
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }else if(error.request){
                    console.log(error.request)
                }else{
                    console.log("Error ", error.message)
                }
            });
            window.location = window.location.pathname;
        } else {
            console.log("not logged in");
        }
        //axios.post("http://localhost:8080" + loc, {"username": this.state.user_username, "text": this.state.comment, "date": new Date}, {headers: {'authorization': myToken}})
        //window.location = window.location.pathname;
    }

    onLike(like) {
        like.preventDefault();
        for (let i = 0; i < this.state.likedBy.length; i++) {
            if (this.state.user_username === this.state.likedBy[i]) {
                console.log("Already liked post");
                return;
            }
        } 
        let loc = window.location.pathname;
        let split = loc.split('/')
        loc = '/' + split[1] + '/like/' + split[2];
        console.log(loc)
        let myToken = localStorage.getItem("jwt")
        if(myToken != null){
            axios.post("http://localhost:8080" + loc, {"name": this.state.user_username}, {headers: {'authorization': myToken}})
            window.location = window.location.pathname;
        } else {
            console.log("not logged in");
        }
        //axios.post("http://localhost:8080" + loc, {"name": this.state.user_username}, {headers: {'authorization': myToken}})
        //window.location = window.location.pathname;
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

    listComments = () => {
        let backend_comment_list = this.commentList();
        let comment_list = [];
        for (let i = 0; i < backend_comment_list.length; i++) {
            comment_list.push(                
                <p class="text-white"> {this.getUser(i)} said: "{this.getText(i)}" on {(this.getDate(i)).substring(0,10)}</p>
            )
        }

        return comment_list;
    }

    oneLike() {
        if (this.state.likes === 1) {
            return "person";
        }
        else {
            return "people";
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
                                <p class="fw-bold">Liked by {this.state.likes} {this.oneLike()} &nbsp;&nbsp;
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
                                {this.listComments()}              
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