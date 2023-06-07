const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = require("./userModel");

const PostSchema = new Schema({
    image: {
        type: String,
        required: [true, "Please provide an image."]
    },
    location: {
        type: String,
        required: [true, "Please provide a location."]
    },
    category: {
        type: String,
        required: [true, "Please provide an category."]
    },
    caption: {
        type: String,
        required: [true, "Please provide an caption."]
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    likes: {
        type: [mongoose.ObjectId],
    },
    author: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: [true, "User must be assigned to post."]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", PostSchema);