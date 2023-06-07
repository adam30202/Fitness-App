const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email already taken."]
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        unique: false
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username already taken."]
    },
    location: {
        type: String,
        required: [true, "Please provide a location"],
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);