const router = require('express').Router();
// Imports Review model
const { Review } = require('../../models');
// Imports handleExpiredCookie module
const handleExpiredCookie = require('../../utils/handleExpiredCookie')

// The `/api/reviews` endpoint

// Route to create/add a review post using async/await
// If user's cookie has not expired, then route is accessed.
// If user's cookie has expired, then throw 400 Bad Request error, and navigate back to the login route.
router.post('/', handleExpiredCookie, async (req, res) => {
    try {
        const reviewData = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // If the review is successfully created, the new response will be returned as json.
        // 200 status code means the request is successful
        console.log(reviewData);
        res.status(200).json(reviewData);
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error.
        console.log(err);
        res.status(400).json(err);
    }
});

// Route to update a review post using async/await.
// If user's cookie has not expired, then route is accessed.
// If user's cookie has expired, then throw 400 Bad Request error, and navigate back to the login route.
router.put('/:id', handleExpiredCookie, async (req, res) => {
    try {
        const reviewData = await Review.update(
            {...req.body},
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                }
            }
        )
        // If the review was successfully updated, the new response will be returned as json.
        // 200 status code means the request is successful
        console.log(reviewData);
        res.status(200).json(reviewData);
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error.
        console.log(err);
        res.status(400).json(err);
    }
});

// Route to delete a review post using async/await.
// If user's cookie has not expired, then route is accessed.
// If user's cookie has expired, then throw 400 Bad Request error, and navigagte back to the login route.
router.delete('/:id', handleExpiredCookie, async (req, res) => {
    try {
        const reviewData = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        // If the review was successfully deleted, the new response will be returned as json.
        // 200 status code means the request is successful.
        console.log(reviewData, 'reviewData');
        res.status(200).json(reviewData);
    } catch (err) {
        // 400 Bad Request response status code indicates that the server cannot or will not process
        // the request due to something that is perceived to be a client error.
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;