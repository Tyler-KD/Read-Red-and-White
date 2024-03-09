const seedUser = require('./userData.json');
const seedReview = require('./reviewData.json');
const seedComment = require('./commentData.json');
const seedWine = require('./wineData.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedReview();

    await seedComment();

    await seedWine();

    process.exit(0);
};

seedAll();