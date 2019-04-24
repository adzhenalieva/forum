const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const nanoid = require('nanoid');
const Post = require('../models/Post');
const auth = require('../middleware/auth');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', (req, res) => {
    Post.find().sort({datetime: 1}).populate('user')
        .then(posts => {res.send(posts)})
        .catch(() => res.sendStatus(500))
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).populate('user')
        .then(result => {
            if (result) return res.send(result);
            res.sendStatus(404)
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', upload.single('image'), auth, (req, res) => {
    const postData = req.body;
    if (req.file) {
        postData.image = req.file.filename;
    }
    postData.user = req.user._id;
    postData.datetime = new Date().toISOString();

    const post = new Post(postData);

    post.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error));
});


module.exports = router;