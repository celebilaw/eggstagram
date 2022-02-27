import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditPost extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //basically need additional fields (i assume in render function here) for: 
        //image (can be none as default for now)
        //tag (ie one for each dining place like epicuria, de neve, etc) (i was thinking drop down menu? but idk)
        //rating (1-5 stars or something or just a text field, has to be a number tho)

        this.state = {
            username: "",
            description: "", //i call it text in post.model.js, is this gonna be an issue
            //i don't want to mess her up so i will leave changes as a comment <3
            //image: "",
            //tag: "",
            //rating: 0,
            date: new Date(),
        }
    }

    // called right before anything is rendered on the webpage
    componentDidMount() {
        // do nothing for now
    }

    onChangeUsername(user) {
        this.setState({
            username: user.target.value
        });
    }

    onChangeDescription(desc) {
        this.setState({
            description: desc.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(submit) {
        submit.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }

        console.log(exercise);

        window.location = "/feed";
    }

    render() {
        return (
            <div>
                <h3>Edit Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div> 
                    <label>Description: </label>
                        <input  type="text"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div>
                        <label>Date:</label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Post"/>
                    </div>
                </form>
            </div>
        )
    }
}