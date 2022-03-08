const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    username: { type: String, required: true },
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    likedBy: [String],
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const postSchema = new Schema({
    username: { type: String, required: true }, // pfp from username?, display next to it
    text: { type: String, required: true },
    image: {type: String, required: true},
    tag: {type: String, required: true},
    rating: {type: Number, required: true},
    likes: {type: Number, default: 0},
    likedBy: [String],
    comments: [commentSchema],
    date: { type: Date, required: true }, // change formatting prob
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Post;