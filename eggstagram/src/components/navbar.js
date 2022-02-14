import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Eggstagram</Link>
        <div>
        <ul>
          <li>
          <Link to="/feed">Posts</Link>
          </li>
          <li>
          <Link to="/post">Make a Post!</Link>
          </li>
          <li>
          <Link to="/account">Create an Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}