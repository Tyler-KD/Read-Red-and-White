const sequelize = require('../config/connection');
const { User, Review, Wine } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const wineData = require('./wineData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const review of reviewData) {
        await Review.create({
            ...review,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    for (const wine of wineData) {
        await Wine.create({
            ...wine,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            // review_id: reviews[Math.floor(Math.random() * reviews.length)].id,
        });
    };

    process.exit(0);
};

seedDatabase();