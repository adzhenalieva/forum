const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.post) {
        Comment.find({post: req.query.post})
            .then(result => {
                if (result) return res.send(result);
                res.sendStatus(404)
            })
            .catch(() => res.sendStatus(500));
    }
});


router.post('/', auth, (req, res) => {
    const comment = new Comment(req.body);

    comment.user = req.user._id;
    comment.post = req.query.post;
    comment.save()
        .then(result => res.send(result))
        .catch(error => res.sendStatus(400).send(error));
});


module.exports = router;