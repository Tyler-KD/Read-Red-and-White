const router = require('express').Router();

const { User, Review, Wine } = require('../models');

const withAuth = require('../utils/auth');

// Route to render homepage
router.get("/", async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                }
            ],
        });
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        res.render('homepage', {
            reviews,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;