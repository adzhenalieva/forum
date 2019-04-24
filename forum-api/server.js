const express = require('express');
const users = require('./app/users');
const posts = require('./app/posts');
const comments = require('./app/comments');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();

const port = 8000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(config.dbURL, config.mongoOptions).then(() => {
    app.use('/users', users);
    app.use('/posts', posts);
    app.use('/comments', comments);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    })
});