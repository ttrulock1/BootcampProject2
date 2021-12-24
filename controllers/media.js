const router = require('express').Router();
const { response } = require('express');
const cloudinary = require('../helpers/cloudinary');

router.post('/upload', function(req, res) {
  cloudinary.upload('testUpload')
  .then((response) => {
    return res.status(200).send(response)
  });
})

// 
router.get('/upload/:id', function(req, res) {
  res.render('media', {'layout': 'main', 'id': req.params.id,'cloudinaryName':process.env.CLOUDINARY_CLOUD_NAME, 'cloudinaryUrl': process.env.CLOUDINARY_UPLOAD_PRESET})
})
  
router.get('/list', function(req, res) {
// let images = [];
  cloudinary.fetchGallery()
    .then((response) => {
      // console.log(response.resources)
      res.render('medialist', {'layout': 'main', 'mediaItems': response.resources})
    })


  // res.render('medialist', {'layout': 'main'})
})


module.exports = router;
  
  