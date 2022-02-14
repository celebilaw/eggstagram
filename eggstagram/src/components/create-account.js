import React from "react";

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
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

    onSubmit(submit) {
        submit.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(user);

        this.setState({
            username: "",
            password: ""
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
                <input type="submit" value="Create Account"/>
              </div>
            </form>
          </div>
        )
    }
}