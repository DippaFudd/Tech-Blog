router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !(await user.checkPassword(req.body.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = user.id;
        res.json({ message: 'Login successful' });
    });
});
