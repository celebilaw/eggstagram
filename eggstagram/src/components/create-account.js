import React from "react";
import axios from 'axios';
import "../css/create-account.css"

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            userError: "",
            emailError: "",
            pswdError: "",
            success: "",
        }

        document.body.style.backgroundColor = "#FFD100";
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

    validate = () => {
        let uError = "";
        let eError = "";
        let pError = "";

        if (!this.state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            eError = "Please enter a valid email address";
        }

        if (!this.state.username) {
            uError = "Please enter a username";
        }

        if (this.state.password.length < 5 || this.state.password.length > 15) {
            pError = "Please enter a password (5-15 letters)";
        }

        if (eError !== "" || uError !== "" || pError !== "") {
            this.setState({
                emailError: eError,
                userError: uError,
                pswdError: pError,
            });
            return false;
        }

        this.setState({
            success: "Account Successfully Created!"
        })

        return true;
    }

    onSubmit(submit) {
        submit.preventDefault();

        const isValid = this.validate();
        if (!isValid) {
            return;
        }

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/register', user)
           .then(res => console.log(res.data));
        
        this.setState({
            username: "",
            email: "",
            password: "",
            userError: "",
            emailError: "",
            pswdError: "",
        });
    }

    render() {
        return (
            <div class="text-center">
                <form class="signIn" noValidate onSubmit={this.onSubmit}>
                    <img class="mt-4 mb-4" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/eggstagram-colin-judge.jpg" 
                        alt="eggstagram logo" height="100"
                    />
                    <h1 class="h3 mb-3 font-weight-normal">Create an Account</h1>
                    <div class="mb-1"> 
                        <label for="emailAddress" class="visually-hidden">Email Address:</label>
                        <input  
                            type="text"
                            id="emailAddress"
                            class="form-control"
                            placeholder="Email Address"
                            required
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div class="mb-3 error-color">
                        {this.state.emailError}
                    </div>
                    <div class="mb-1"> 
                        <label for="username" class="visually-hidden">Username:</label>
                        <input  
                            type="username"
                            id="username"
                            placeholder="Username"
                            class="form-control"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div class="mb-3 error-color">
                        {this.state.userError}
                    </div>
                    <div class="mb-1"> 
                        <label for="password" class="visually-hidden">Password:</label>
                        <input  
                            type="password"
                            id="password"
                            placeholder="Password"
                            class="form-control"
                            required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div class="mb-3 error-color">
                        {this.state.pswdError}
                    </div>
                    <div>
                        <button type="submit" class="btn btn-lg signUpButton btn-block">Sign Up</button>
                    </div>
                </form>
                <div class="mt-3 success-color">
                    {this.state.success}
                </div>
            </div>
        )
    }
}