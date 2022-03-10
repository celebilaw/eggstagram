import React from "react";
import axios from 'axios';
import '../css/postlist.css';
import Rating from '@material-ui/lab/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLinkClickHandler } from "react-router-dom";


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
                    image: "",
                    edit: ""};
        this.onLike = this.onLike.bind(this);
        this.onComment = this.onComment.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onChangeEdit = this.onChangeEdit.bind(this);
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#FFD100";
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
                            image: response.data.image,
                            edit: response.data.text})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //height="500" width="500" class="img-fluid" alt=""
    isImage() {
        if (this.state.image !== "none" && (this.state.image.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
        ) {
            return <img src={this.state.image} alt="food img" class="card-img-top view-image"/>;
        }
        else 
            return <img src="https://i.imgur.com/Wv0Vmys.jpg" alt="food img" class="card-img-top card-img view-image"/>;
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
                <p class="text-white comment-wrap"> {this.getUser(i)} said: "{this.getText(i)}" on {(this.getDate(i)).substring(0,10)}</p>
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

    onDelete(del) {
        del.preventDefault();
        let loc = window.location.pathname;
        let myToken = localStorage.getItem("jwt")
        if(myToken != null){
            //should i add authentication? it only shows up if the username is correct anyway
            axios.delete("http://localhost:8080" + loc, {headers: {'authorization': myToken}})
            window.location = "http://localhost:3000/feed";
        } else {
            console.log("not logged in");
        }
        return;
    }

    onEdit(edit) {
        edit.preventDefault();
        let loc = window.location.pathname;
        let myToken = localStorage.getItem("jwt")
        if(myToken != null){
            //should i add authentication? it only shows up if the username is correct anyway
            axios.post("http://localhost:8080" + loc, {"username": this.state.user_username, "text": this.state.edit, "date": new Date()}, 
                                                        {headers: {'authorization': myToken}})
            window.location = window.location.pathname;
        } else {
            console.log("not logged in");
        }
        return;
    }

    onChangeEdit(desc) {
        this.setState({
            edit: desc.target.value
        });
    }

    isPoster() {
        if (this.state.user_username == this.state.poster_username) {
            return <button class="btn btn-primary fw-bold" type="submit" onClick={this.onDelete}> <i class="bi"></i>  Delete Post </button>
        }
        else return;
    }

    isPoster2() {
        if (this.state.user_username == this.state.poster_username) {
            let return_val = [];
            return_val.push(
            <div class="container">
                <div class="row align-items-center">
                    <div class="col align-self-center">
                        <p class="text-blue fw-bold">Edit Your Post</p>
                        <div class="commentInput">
                            <label for="text" class="visually-hidden">Edit</label>
                            <textarea
                                    type="text"
                                    id="description"
                                    class="form-control"
                                    placeholder="Enter New Post Text Here"
                                    required
                                    value={this.state.edit}
                                    onChange={this.onChangeEdit}
                                    rows="2"
                            >
                            </textarea>
                        </div>
                        <button class="btn btn-dark fw-bold" type="submit" onClick={this.onEdit}> <i class="bi bi-chevron-right"></i> Submit Edit</button>
                    </div>
                </div>
            </div>
            )
            return return_val;
        }
        else return;
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
                            <div class="col-md p-4 bg-light desc-wrap">
                                <h5 class="fw-bold"> {this.cuteTag()}
                                    <div>    
                                        <Rating
                                            name="Rating Label"
                                            value={this.state.rating}
                                            size="large"
                                            sx={{
                                                color: "rating-color"
                                            }}
                                            style={{opacity: 1}}
                                            disabled
                                        />
                                    </div>
                                </h5>
                                <p>Posted by {this.state.poster_username} on {(this.state.date).substring(0,10)}</p>
                                <p class="lead"> {this.state.text}</p>
                                <p class="fw-bold">Liked by {this.state.likes} {this.oneLike()} &nbsp;&nbsp;
                                    <button class="btn btn-primary fw-bold" type="submit" onClick={this.onLike}> <i class="bi bi-hand-thumbs-up"></i>  Like Post </button>
                                </p>
                                {this.isPoster()}
                                &nbsp;&nbsp;
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
                <section class="p-5 yellowSection">
                    {this.isPoster2()}
                </section>
            </div>
        )
    }
}