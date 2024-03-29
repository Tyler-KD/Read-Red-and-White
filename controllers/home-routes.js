const router = require('express').Router();

const { User, Review, Comment, Wine } = require('../models');

const withAuth = require('../utils/auth');

// Route to render homepage
router.get("/", async (req, res) => {
    try {
        // Find all book reviews with associated usernames
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        });
        // Convert blog data to plain JavaScript object
        const reviews = reviewData.map((review) => review.get({ plain: true }));
        // Render the homepage with book reviews and login status
        res.render('homepage', {
            reviews,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        // If there is an error, return 500 status code error message
        res.status(500).json(err);
    }
});

// Route to render profile and all reviews by user.
// Use withAuth Middleware to prevent access to route.
// If user is logged in, then route is accessed.
// If user is logged out, then redirect back to login.
router.get('/profile', withAuth, async (req,res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['email', 'password'] },
            include: [{ model: Review }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render the create-review page by user.
// Use withAuth Middleware to prevent access to route.
// If user is logged in, then route is accessed.
// If user is logged out, then redirect back to login.
router.get('/create-review', withAuth, async (req,res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['email', 'password'] },
            include: [{ model: Review }],
        });

        const user = userData.get({ plain: true });

        res.render('create-review', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render individual reviews
// GET one blog with serialized data
router.get('/review/:id', async (req, res) => {
    try {
        // Search the db for a review with an id that matches params
        const reviewData = await Review.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User, attributes: ['username'],
                        },
                    ],
                },
                {
                    model: Wine,
                    include: [
                        {
                            model: User, attributes: ['username'],
                        },
                    ],
                },
            ],
        });
        const review = reviewData.get({ plain: true });
        console.log(review);
        // The 'review' template is rendered and review is passed into the template
        res.render('review', {
            ...review,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to render user's reviews within profile
// Get one review with serialized data
router.get('/review/:id/edit', async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const review = reviewData.get({ plain: true });
        console.log(review);
        // The 'review' template is rendered and review is passed into the template.
        res.render('editreview', {
            ...review,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to render the login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    console.log(req.session);
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

module.exports = router;