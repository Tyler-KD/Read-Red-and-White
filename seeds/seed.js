const sequelize = require('../config/connection');
const { User, Review, Comment, Wine } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const commentData = require('./commentData.json');
const wineData = require('./wineData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Pass through Review
    const reviews = await Review.bulkCreate(reviewData.map(review => ({
        ...review,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    })), {
        individualHooks: true,
        returning: true,
    });

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            review_id: reviews[Math.floor(Math.random() * reviews.length)].id,
        });
    };

    // for (const wine of wineData) {
    //     await Wine.create({
    //         ...wine,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //         review_id: reviews[Math.floor(Math.random() * reviews.length)].id,
    //     });
    // };

    process.exit(0);
};

seedDatabase();