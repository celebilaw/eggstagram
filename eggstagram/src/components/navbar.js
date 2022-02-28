import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-text" to="/"> {/*Eggstagram*/} 
            Eggstagram&ensp;
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/eggstagram-colin-judge.jpg" 
                  alt="eggstagram logo" height="20"
            />
          </Link>

          <div>
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

