const seedUser = require('./userData.json');
const seedReview = require('./reviewData.json');
const seedWine = require('./wineData.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedReview();

    await seedWine();

    process.exit(0);
};

seedAll();