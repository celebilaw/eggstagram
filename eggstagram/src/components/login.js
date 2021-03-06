import React from "react";
import axios from 'axios';
import "../css/login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            success: ""
        }

        document.body.style.backgroundColor = "#8BB8E8";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('https://www.hotelpalomar-beverlyhills.com/images/1700-960/aerial-view-of-ucla-0886e91c.jpg')";
    }

    onChangeEmail(emal) {
        this.setState({
            email: emal.target.value
        });
    }

    onChangePassword(pswd) {
        this.setState({
            password: pswd.target.value
        });
    }

    onSubmit(submit) {
        submit.preventDefault();

        if (!this.state.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            this.setState({
                success: "Invalid credentials!"
            });
        }

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('http://localhost:8080/login', user)
            .then(res => {
                if (res.data.error === undefined) {
                    this.setState({
                        email: "",
                        password: "",
                        success: ""
                    });
                    localStorage.setItem('jwt', res.data.token)
                    localStorage.setItem('username', res.data.username)
                    window.location = "/feed";
                } else {
                    this.setState({
                        success: res.data.error
                    });
                }
            });
    }

    render() {
        return (
        <div class="text-center">
            <form className="login" noValidate onSubmit={this.onSubmit}>
                <img class="mt-4 mb-4" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/eggstagram-colin-judge.jpg" 
                    alt="eggstagram logo" height="100"
                />
                <h1 class="h3 mb-3 font-weight-bold login-text shadow-lg">Login</h1>
                <div class="mb-3"> 
                    <label for="emailAddress" class="visually-hidden">Email Address:</label>
                    <input  
                        type="email"
                        id="emailAddress"
                        class="form-control"
                        placeholder="Email Address"
                        required
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div> 
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
                <div class="mt-3">
                    <button type="submit" class="btn btn-lg loginButton btn-block">Login</button>
                </div>
                <div class="mt-3 error-color">
                    {this.state.success}
                </div>
            </form>
        </div>
        )
    }
}