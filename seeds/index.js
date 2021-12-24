const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedGallery();

        await seedPaintings();

    } catch (error) {
        console.log(error)
    }

    process.exit(0);
};

seedAll();
