import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import PostList from "./components/post-list";
import CreatePost from "./components/create-post";
import CreateAccount from "./components/create-account";
import MainComponents from "./components/maincomponents";
import Login from "./components/login"
import ViewPost from "./components/view-post";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainComponents />} />
          <Route path="/feed" element={<PostList />} />
          <Route path="/post" element={<CreatePost />} />            
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/login" element={<Login />}/>
        </Routes>        
      </div>
      <div>
        <Routes>
          <Route path="/posts/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;