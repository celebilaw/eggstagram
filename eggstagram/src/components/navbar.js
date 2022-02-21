import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/"> {/*Eggstagram*/}
          <img src={require('./images/eggstagram.png')} alt="temporary eggstagram logo" height={50} width={150}/>
        </Link>
        <div>
        <ul>
          <li className="nav-links">
          <Link to="/feed">Posts</Link>
          </li>
          <li className="nav-links">
          <Link to="/post">Make a Post!</Link>
          </li>
          <li className="nav-links">
          <Link to="/register">Create an Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}