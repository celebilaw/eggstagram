import React from "react";
import { Link } from 'react-router-dom';
import '../css/postlist.css';
import axios from 'axios';
import SearchBar from "./SearchBar";
//how can we import data in order to search for key words/food/posts? 

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.description}</td>
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
        axios.get('http:/http://localhost:5000/feed/')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

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

    render() {
        return (
            <div class="container-fluid">
                <SearchBar placeholder="Enter post description" data={this.postList()}/>
                <br />
                <p>You are on the Feed Component!</p>
                    <tbody>
                        { this.postList() }
                    </tbody>
                <div class="row g-4 mb-4">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://spoonuniversity.com/wp-content/uploads/sites/61/2015/11/flat-fread-1024x1024.png" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">De Neve Pizza</h5>
                                <p class="card-text"> yoloadsfasdfsfsdfsdfasdfasdfsadfasdfasdfasdfsdafsdfsdafasdfasdfasdsdaasdfasdfsdafsdafasdfafasdfasdfasdfasdfsadfsdasdfasdfsadfsadfsadfasdfasdfsadfasdfasdfasdfasdfsadfdssdafasdfasfasdfasdfasfasdfsadfsadfsd </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://wp.dailybruin.com/images/2018/10/web.ns_.swipereward.RH_.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">BPlate burgers</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/Ee36c0VUEAU-_sZ.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">This food sucks!</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/Ee36c0VUEAU-_sZ.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">This food sucks!</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 mb-4">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20154/North-African-Style-Honey-R.jpg"
                            alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">De Neve Pizza</h5>
                                <p class="card-text"> doododo deez </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20154/554a8675299b50588c0011e0_Polenta-Panzanella-Salad/Polenta-Panzanella-Salad_318c3ae6-0c00-498f-86af-bffc134443ab-prv.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">BPlate burgers</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="https://pbs.twimg.com/media/C4PfmHdVMAApMj4.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">This food sucks!</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="card border-light bg-dark text-white card-size">
                            <img src="http://menu.dining.ucla.edu/Content/Images/RecipeImages/123084.jpg" alt="food image" class="card-img-top card-img"/>
                            <div class="card-body overflow-auto">
                                <h5 class="card-title">This food sucks!</h5>
                                <p class="card-text"> lalalaalala </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}