const router = require('express').Router();

const userRoutes = require('./user-routes');
const galleryRoutes = require('./gallery-routes');

router.use('/users', userRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;