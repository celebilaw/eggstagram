const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const login = require('../middleware/login');
require("dotenv").config();
let User = require('../models/user.model');
let Post = require('../models/post.model');

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
            const token=jwt.sign({_id:savedUser._id},process.env.JWT_SECRET)
            res.json({token:token})
          }
        })
    })
});

// protected area
router.get('/protected',login,(req,res)=>{
  res.send("hello");
});

// return all posts found in the database
router.route('/feed').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// save new post to database
router.route('/post').post((req, res) => {
  const username = req.body.username;
  const text = req.body.text;
  const date = Date.parse(req.body.date);
  const newPost = new Post({username, text, date});
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
  
// update specific post
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

module.exports = router;