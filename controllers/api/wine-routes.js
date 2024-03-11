const router = require('express').Router();
// Imports Wine model
const { Wine } = require('../../models');
// Imports handleExpiredCookie module
const handleExpiredCookie = require('../../utils/handleExpiredCookie')

// The `api/wine` endpoint

// Route to create/add a wine.
// If user's cookie has not expired, then route is accessed.
// If user's cookie has expired, then throw 400 Bad Request error, and navigate to the login route.
router.post('/', handleExpiredCookie, async (req, res) => {
    try {
        const wineData = await Wine.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // If successfully created, the new response will be returned as json
        // 200 status code means the request is successful
        console.log('wine');
        console.log(wineData);
        res.status(200).json(wineData);

    } catch (err) {
        // 400 Bad Request response status code indicates server cannot process the request due to client error
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;