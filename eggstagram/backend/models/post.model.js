const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: true }, // pfp from username?, display next to it
    text: { type: String, required: true },
    // image, required
    // restaurant tag, required
    // rating, required
    date: { type: Date, required: true }, // change formatting prob
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;