const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../middleware/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            postId: req.body.postId, // Correct key: postId
            userId: req.session.userId,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
