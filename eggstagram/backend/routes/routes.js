const router = require('express').Router();
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
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({username, email, password});
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
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
  const image = req.body.image;
  const tag = req.body.tag;
  const rating = req.body.tag;
  const date = Date.parse(req.body.date);
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
  
// update specific post - currently should just be for text edits
router.route('/posts/:id').post((req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(post => {
      post.text = req.body.text;
      post.date = Date.parse(req.body.date);
      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;