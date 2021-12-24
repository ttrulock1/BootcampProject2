const { Painting } = require('../models');

const paintingdata = [
//   {
//     title: '',
//     artist: '',
//     gallery_id: 1,
//     filename: '/images/Anime/A01-image.jpg',
//     description:'Anime',
//   },
];

const seedPaintings = async () => await Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
