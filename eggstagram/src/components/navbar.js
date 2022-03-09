import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';

export default class Navbar extends React.Component {
  render() {
    let tokenString = localStorage.getItem('jwt');
    let loggedIn = false;
    if (!(tokenString === null)) {
      loggedIn = true;
    }

    function logoutFunc() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('username');
      window.location.reload();
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-custom fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-text" to="/"> {/*Eggstagram*/} 
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/eggstagram-colin-judge.jpg" 
                    alt="eggstagram logo" height="23"
            />
            &ensp;Eggstagram
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>          
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link navbar-text" to="/feed">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-text" to="/post">Make a Post!</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-text" to="/register">Create an Account</Link>
              </li>
              <li className="nav-item">
                {loggedIn && <button class="btn login-button text-white" onClick={logoutFunc}>Logout</button>}
                {!loggedIn && <Link class="btn login-button text-white" to="/login">Login</Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

