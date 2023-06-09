const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("./db/dbConnect");
const auth = require("./auth");

const User = require("./db/userModel");
const Post = require("./db/postModel");

dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/////// Post Routes/Controllers /////////////

///// Adds post
app.post("/new-post", (req, res) => {
    const post = new Post({
        image: req.body.image,
        category: req.body.category,
        caption: req.body.caption,
        location: req.body.location,
        author: req.body.author,
    });
    post
        .save()
        .then((result) => {
            res.status(201).send({
                message: "Post added successfully.",
                result,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error saving post.",
                error,
            });
        });
});


///// Gets all posts
app.get("/post", (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) res.status(400).send(error);
        res.status(200).json(posts);
    })
});

///// Gets all of the user's posts
app.get("/myposts", (req, res) => {
    Post.find({author: req.query.author}, (error, posts) => {
        if (error) res.status(400).send(error);
        res.status(200).json(posts);
    })
});

///// Gets post to edit
app.get("/edit-spotted", (req, res) => {
    Post.find({_id: req.query.id}, (error, post) => {
        if (error) res.status(400).send(error);
        res.status(200).json(post);
    })
});

///// Edits post
app.put("/edit-spotted", (req, res) => {
    Post.findOneAndUpdate(
        {_id: req.query.id},
        req.body,
        { new: true },
        (error, post) => {
            if (error) res.status(400).send(error);
            res.status(200).json(post);
            console.log(req.query.id)
        });
});

///// Deletes post
app.delete("/myposts:id", (req, res) => {
    Post.deleteOne({_id: req.params.id }, (error) => {
            if (error) res.status(400).send(error);

            res.status(200).json({
                message: req.query.id,
                _id: req.params.wordId
            });
        })
});




////// User Routes/Controllers ////////


app.post("/register", (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                email: req.body.email,
                password: hashedPassword,
                location: req.body.location,
                username: req.body.username,
            });
            user
                .save()
                .then((result) => {  
                    
                    // Creates JWT Token to auto sign in new user
                    const token = jwt.sign(
                        {
                            userId: this._id,
                            userEmail: this.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24hr" }
                    );
                    res.status(201).send({
                        message: "User created successfully.",
                        result,
                        token,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user.",
                        error,
                    });
                });
        })
        .catch((error) => {
            res.status(500).send({
                message: "Password failed to hash.",
                error,
            });
        });
});

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
            .then((passwordCheck) => {
                if (!passwordCheck) { // If entered password does not match error handler
                    return res.status(400).send({
                        message: "Passwords do not match",
                        e,
                    });
                }
            
                // Creates JWT Token
                const token = jwt.sign(
                    {
                        userId: user._id,
                        userEmail: user.email,
                        userLocation: user.location,
                        userUsername: user.username
                    },
                    "RANDOM-TOKEN",
                    { expiresIn: "24hr" }
                );

                //returns success response
                res.status(200).send({
                    message: "Login Successful",
                    email: user.email,
                    token,
                });
            })
            .catch((e) => {
                res.status(400).send({
                    message: "Passwords do not match", // Potential bcrypt error handler
                    e,
                });
            })
        })
        .catch((e) => {
            res.status(404).send({
                message: "Email not found.",
                e,
            });
        });
})

// free endpoint
// app.get("/free-endpoint", (req, res) => {
//     res.json({ message: "You are free to access me anytime" });
//   });
  
//   // authentication endpoint
// app.get("/auth-endpoint", auth, (req, res) => {
//     res.json({ message: "You are authorized to access me" });
// });

module.exports = app;
