import React from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.description}</td>
        <td>{props.post.date.substring(0,10)}</td>
        <td>
            {<Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => {props.deletePost(props.post._id)}}>delete</a>} {/*todo*/}
        </td>
    </tr>
)

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get('http:/http://localhost:5000/feed')
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
            <div>
                <p>You are on the Feed Component!</p>
                    <tbody>
                        { this.postList() }
                    </tbody>
            </div>
        )
    }
}