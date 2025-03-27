const router = require('express').Router();
const withAuth = require('../middleware/auth');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const { Post, Comment, User } = require('../models');

// Register API routes
router.use('/api/comments', commentRoutes);
router.use('/api/posts', postRoutes);

// Protect dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { userId: req.session.userId },
            include: [{ model: User, attributes: ['username'] }],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Protect single post route
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: { model: User, attributes: ['username'] },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        if (!postData) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const post = postData.get({ plain: true });
        res.render('singlePost', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;