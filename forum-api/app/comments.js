const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');



router.get('/?post=', (req, res) => {
    Comment.find({})
        .then(comments => {res.send(comments)})
        .catch(() => res.sendStatus(500))
});


router.post('/', auth, (req, res) => {
    const comment = new Comment(req.body);
    comment.user = req.user._id;
    comment.post =
    post.save()
        .then(result => res.send(result))
        .catch(error => res.sendStatus(400).send(error));
});


module.exports = router;