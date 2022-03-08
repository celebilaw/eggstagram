const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const login = require('../middleware/login');
require("dotenv").config();
let User = require('../models/user.model');
let Post = require('../models/post.model');
let Comment = require('../models/post.model'); // is this part of the access issue? 

// return all users found in the database
router.route('/users').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// save new user to database
router.route('/register').post((req, res) => {
  var {username, email, password} = req.body;
  bcrypt.hash(password,12)
    .then((hashedpw)=>{
      const newUser = new User({
        username,
        email,
        password: hashedpw,
      })
      newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
});


// login to user account
router.route('/login').post((req, res) => {
  var {email, password} = req.body;
  User.findOne({email: email})
    .then((savedUser)=>{
      bcrypt.compare(password,savedUser.password)
        .then(match=>{
          if (match) {
            const token=jwt.sign({_id:savedUser._id},process.env.JWT_SECRET, { expiresIn: '30s' })
            return res.json({'token':token})
          }
        })
    })
});

// protected area
router.get('/protected',login,(req,res)=>{
  res.send("hello");
});

// return all posts found in the database, most recent first
router.route('/feed').get((req, res) => {
  Post.find().sort( {createdAt: "desc"} )
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// save new post to database
router.route('/post').post((req, res) => {
  const username = req.body.username;
  const text = req.body.text;
  const image = req.body.image;
  const tag = req.body.tag;
  const rating = req.body.rating;
  const date = req.body.date;
  const likes = 0;
  const newPost = new Post({username, text, image, tag, rating, likes, date});
  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// find post from database
router.route('/posts/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
// delete specific post
router.route('/posts/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// like post
// problem: how do you get username of person liking post?
router.route('/posts/like/:id').post((req,res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: req.body})
//     //do you need to restate everything or can you just update likes (checkout findByIdAndUpdate)
    .then(post => {
      post.likes = post.likes + 1;
      post.likedBy.push(req.body.name);
      post.save()
       .then(() => res.json('Post liked by ' + req.body.name))
       .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// update specific post - currently just for text edits
router.route('/posts/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.username = req.body.username;
      post.text = req.body.text;
      post.date = Date.parse(req.body.date);
      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

 //filter through posts by tag, most recent post first
router.route('/feed/:tag').get((req, res) => {
  Post.find( {tag: req.params.tag} ).sort( {createdAt: "desc"})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

//sort posts by number of likes (most -> least)
//change route tho? idk what to call it
router.route('/feed-hot').get((req, res) => {
  Post.find().sort({likes: "desc"})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//sort posts by user (return all posts posted by a user)
router.route('/feed/user/:name').get((req, res) => {
  Post.find( {username: req.params.name} ).sort( {createdAt: "desc"})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

//search for a post with a keyword
router.route('/feed/search/:key').get((req, res) => {
  Post.find( {text: {$regex : req.params.key, $options: 'i'}} ).sort( {createdAt: "desc"})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

//add a comment
router.route('/posts/comment/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      const username = req.body.username;
      const text = req.body.text;
      const likes= 0;
      const date = Date.parse(req.body.date);
      post.comments.push(new Comment({username, text, likes, date}));
      post.save()
        .then(() => res.json('Post commented on by: ' + req.body.username))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//returns all comments for a specific post
router.route('/posts/comments/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.json(post.comments)
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); 

//like comment: currently not functional <3
//prob isn't necessary, jsut an optional additional feature
//if we get rid of comment likes then i'll change the commentSchema to make it simpler
//also sorry for the disgusting link
/* router.route('/posts/:id/comment/like/:comID').post((req,res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.forEach(post.comments) 
        .then(comment => {
          comment.likes = comment.likes + 1;
          comment.likedBy.push(req.body.name);
          comment.save()
          .then(() => res.json('Comment liked by ' + req.body.name))
          .catch(err => res.status(400).json('Error ' + err));
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));
});  */


module.exports = router;
