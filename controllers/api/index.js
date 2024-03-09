const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const commentRoutes = require('./comment-routes');
// const wineRoutes = require('./wine-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/comments', commentRoutes);
// router.use('/wines', wineRoutes);

// Exports userRoutes, reviewRoutes, and wineRoutes
module.exports = router;