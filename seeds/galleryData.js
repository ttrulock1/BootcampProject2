const { Gallery } = require('../models');

const gallerydata = [

];

const seedGallery = async () => await Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;