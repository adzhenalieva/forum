const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:post_id', (req, res) => {
    Comment.find({post: req.params.post_id}).populate('user')
        .then(result => {
            if (result) return res.send(result);
            res.sendStatus(404)
        })
        .catch(() => res.sendStatus(500));
});


router.post('/', auth, async (req, res) => {
    const comment = await new Comment({
        comment: req.body.comment,
        user: req.user._id,
        post: req.body.post
    });

    comment.save()
        .then(result => res.send(result))
        .catch(error => res.sendStatus(400).send(error));
});


module.exports = router;