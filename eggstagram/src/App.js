import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import PostList from "./components/post-list";
import EditPost from "./components/edit-post";
import CreatePost from "./components/create-post";
import CreateAccount from "./components/create-account";
import MainComponents from "./components/maincomponents";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<MainComponents />} />
          <Route path="/feed" element={<PostList />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post" element={<CreatePost />} />            
          <Route path="/register" element={<CreateAccount />} />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;