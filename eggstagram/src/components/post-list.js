import React from "react";
import { Link } from 'react-router-dom';
import '../css/postlist.css';
import axios from 'axios';
import SearchBar from "./SearchBar";
import Rating from '@material-ui/lab/Rating';

var searchTag="";
var ratingVal=-1;

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
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount() {
        if (searchTag !== "") { //filters by tag
            axios.get('http://localhost:8080/feed/'+searchTag)
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
            searchTag="";
        }
        else if (ratingVal !== -1 && ratingVal !== null) { //filters by rating
            axios.get('http://localhost:8080/feed/stars/'+ratingVal)
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
            ratingVal=-1;
        }
        else {
            axios.get('http://localhost:8080/feed/')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            }) 
        }
    }
    //why would we delete a post? no entiendo
    deletePost(id) {
        axios.delete('http:/http://localhost:8080/feed'+id)
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
    getImage(i) {
        let postList = this.postList();
        let imgList = [];
        postList.forEach(d => imgList.push(d.props.post.image));
        if (imgList[i] == "none") {
            return "https://i.imgur.com/Wv0Vmys.jpg";
            //set equal to eggstagram logo and return
        }
        return imgList[i];
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
        return textList[i] ;
    }

    onSubmit(submit) {
        submit.preventDefault();
        var search_tag = document.getElementById("search-tag");
        var tag = search_tag.value
        searchTag = tag;
        this.componentDidMount();
    }

    onChangeRating(newValue) {
        ratingVal = newValue;
        this.componentDidMount();
    }
    
    listPosts = () => {
        let backend_post_list = this.postList();
        let post_list = [];
        for (let i = 0; i < backend_post_list.length; i++) {
            post_list.push(                
                <div class="col-sm-6 col-md-6 col-lg-3">
                <Link class= "card card-text post-card text-white" to={"/posts/"+this.getId(i)}>
                    <div class="card border-light bg-dark text-white card-size">
                        <img src={this.getImage(i)} alt="food image" class="card-img-top card-img"/>
                        <div class="card-body overflow-auto">
                            <h5 class="card-title card-text post-text header-text">{this.getTag(i)}</h5>
                            <p class="card-text post-text"> {this.getText(i)} </p>
                        </div>
                    </div>
                </Link>
                </div>
            );
        }

        return post_list;
    }

    render() {
        return (
            <div class="container-fluid">
                <br />
                <h1 class="mt-3 text-center text-primary ">Review Feed</h1>
                <SearchBar placeholder="Search for a post description" data={this.state.posts}/>
                <br />

                <form class="text-box" style={{ width: "250px", paddingLeft: "5px" }} onSubmit={this.onSubmit}>
                    <h1 class="h3 mb-6 font-weight-normal text-white" style={{ fontSize: "20px" }}>Or filter by tag!</h1>
                    <select id="search-tag" class="mb-4 form-select" aria-label="select-menu" required>
                        <option value="" selected disabled>Choose a Dining Hall</option>
                        <option value="">Show All</option>
                        <option value="Epicuria">Epicuria</option>
                        <option value="De_Neve">De Neve</option>
                        <option value="Feast">Feast</option>
                        <option value="Bruin_Plate">Bruin Plate</option>
                        <option value="Bruin_Cafe">Bruin Cafe</option>
                        <option value="Rendezvous">Rendezvous</option>
                        <option value="The_Study">The Study at Hedrick</option>
                        <option value="The_Drey">The Drey</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
                <br />

                <div className="mb-4" style={{ paddingLeft: "5px" }}>
                <h1 class="h3 mb-6 font-weight-normal text-white" style={{ fontSize: "20px" }}>Or filter by rating!</h1>
                    <Rating
                        size="large"
                        onChange={(event, newValue) => {
                            this.onChangeRating(newValue);
                        }}
                    />
                </div>

                <tbody>
                    {console.log(this.getTag(1))}
                </tbody>
                <div class="row g-4 mb-4">
                    {this.listPosts()}
                </div>
            </div>
        )
    }
}