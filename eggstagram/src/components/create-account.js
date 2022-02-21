import React from "react";
//import axios from 'axios';

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            email: "",
        }
    }

    onChangeUsername(user) {
        this.setState({
            username: user.target.value
        });
    }

    onChangePassword(pswd) {
        this.setState({
            password: pswd.target.value
        });
    }

    onChangeEmail(emal) {
        this.setState({
            email: emal.target.value
        });
    }

    onSubmit(submit) {
        submit.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }

        console.log(user);

        //axios.post('http://localhost:5000/post', post)
          //  .then(res => console.log(res.data));
        
        this.setState({
            username: "",
            password: "",
            email: ""
        });
    }

    render() {
        return (
            <div>
            <h3>Create Account</h3>
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
                <label>Password:</label>
                <input  
                    type="text"
                    required
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
              <div> 
                <label>Email:</label>
                <input  
                    type="text"
                    required
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
              </div>
              <div>
                <input type="submit" value="Create Account"/>
              </div>
            </form>
          </div>
        )
    }
}