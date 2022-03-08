import React from "react";
import { Link } from 'react-router-dom';
import '../css/postlist.css';
import axios from 'axios';
import SearchBar from "./SearchBar";

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.text}</td>
        <td>{props.post.rating}</td>
        <td>{props.post.tag}</td>
        <td>{props.post.likes}</td>
        <td>{props.post.date.substring(0,10)}</td>
        <td>
            {<Link to={"/edit/"+props.post._id}>edit</Link> | <a href="#" onClick={() => {props.deletePost(props.post._id)}}>delete</a>} {/*todo*/}
        </td>
    </tr>
)

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
        this.state = {posts: []};
        document.body.style.backgroundColor = "#FFD100";
    }

    componentDidMount() {
        axios.get('http://localhost:5000/feed/')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
    //why would we delete a post? no entiendo
    deletePost(id) {
        axios.delete('http:/http://localhost:5000/feed'+id)
          .then(res => console.log(res.data));
        this.setState({
            posts: this.state.posts.filter(el => el._id !== id)
        })
    }

    postList() {
        return this.state.posts.map(currentpost => {
            return <Post post={currentpost} deletePost={this.deletePost} key={currentpost._id}/>;
        })
    }
    
    getTag(i) {
        let postList = this.postList();
        let tagList = [];
        postList.forEach(d => tagList.push(d.props.post.tag));
        switch(tagList[i]) {
            case "de_neve":
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
                return <p>{tagList[i]}</p>;
        }
    }

    getId(i) {
        let postList = this.postList();
        let idList = [];
        postList.forEach(d => idList.push(d.props.post._id));
        return idList[i];
    }

    getText(i) {
        let postList = this.postList();
        let textList = [];
        postList.forEach(d => textList.push(d.props.post.text));
        return textList[i];
    }

    render() {
        return (
            <div class="container-fluid">
                <SearchBar placeholder="Enter post description" data={this.state.posts}/>
                <br />
                <p>You are on the Feed Component!</p>
                    <tbody>
                        {console.log(this.getTag(1))}
                    </tbody>
                <div class="row g-4 mb-4">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(0)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://spoonuniversity.com/wp-content/uploads/sites/61/2015/11/flat-fread-1024x1024.png" alt="food image" class="card-img-top card-img"/>
                            {/*<img src="https://www.citypng.com/public/uploads/preview/-51611552141cxqbb1ntp1.png" alt="heart" class="card-heart card-heart-bottom"/>*/}
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(0)}</h5>
                                <p class="card-text post-text"> {this.getText(0)} </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(1)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://wp.dailybruin.com/images/2018/10/web.ns_.swipereward.RH_.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(1)}</h5>
                                <p class="card-text post-text"> {this.getText(1)} </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(2)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/Ee36c0VUEAU-_sZ.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(2)}</h5>
                                <p class="card-text post-text"> {this.getText(2)} </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(3)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/Ee36c0VUEAU-_sZ.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(3)}</h5>
                                <p class="card-text post-text"> {this.getText(3)} </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
                <div class="row g-4 mb-4">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(4)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20154/North-African-Style-Honey-R.jpg"
                            alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(4)}</h5>
                                <p class="card-text post-text"> {this.getText(4)}</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(5)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20154/554a8675299b50588c0011e0_Polenta-Panzanella-Salad/Polenta-Panzanella-Salad_318c3ae6-0c00-498f-86af-bffc134443ab-prv.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(5)}</h5>
                                <p class="card-text post-text">{this.getText(4)}</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(6)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/C4PfmHdVMAApMj4.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(6)}</h5>
                                <p class="card-text post-text"> {this.getText(6)} </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                    <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(7)}>
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="http://menu.dining.ucla.edu/Content/Images/RecipeImages/123084.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title card-text post-text">{this.getTag(7)}</h5>
                                <p class="card-text post-text"> {this.getText(7)}</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}