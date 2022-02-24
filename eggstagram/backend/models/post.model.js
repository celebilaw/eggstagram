const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: true }, // pfp from username?, display next to it
    text: { type: String, required: true },
    image: {type: String, required: true},
    tag: {type: String, required: true},
    rating: {type: Number, require: true},
    likes: {type: Number, default: 0},
    likedBy: [String],
    //add comments: [commentSchema] plus new commentSchema? 
    //kinda like the setup above and then in the comment schema have username, text 
    //so each post has its own set of comments
    //otherwise could have property isComment inside post. maybe better bc no need for multiple things, but harder to map to posts
    // image, required
    // restaurant tag, required
    // rating, required
    date: { type: Date, required: true }, // change formatting prob
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;