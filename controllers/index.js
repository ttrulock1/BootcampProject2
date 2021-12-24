const router = require('express').Router();
const apiRoutes = require('./api');
const media = require('./media');

const homeroutes = require ('./home-route')

router.use('/', homeroutes)

router.use('/api', apiRoutes);
router.use('/media', media);

module.exports = router;

