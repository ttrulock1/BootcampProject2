const router = require('express').Router();
const { Gallery, Painting } = require('../../models');
const withAuth = require('../../utils/auth');
const isGalleryCreator = require('../../utils/isGalleryCreator');

// CREATE new Gallery
router.post('/new', withAuth, async (req, res) => {
    try {
        const galleryData = await Gallery.create({
            name: req.body.name,
            creator_id: req.session.loggedInId
        });
        res.status(200).json(galleryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update existing galllery
router.put('/:id', withAuth, isGalleryCreator, async (req, res) => {
    try {
        const galleryData = await Gallery.update(
            {
                name: req.body.name,
            },
            {
                where: {
                    id: req.params.id,
                },
            });
        res.status(200).json(galleryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete an existing gallery
router.delete('/:id', withAuth, isGalleryCreator, async (req, res) => {
    try {
        const galleryData = await Gallery.destroy(
            {
                where: {
                    id: req.params.id,
                },
            });
        res.status(200).json(galleryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE new painting/art. fileman has to do deal with cloudinary we dont **** yet but we will.
router.post('/:id/new', withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const paintingData = await Painting.create({
            gallery_id: req.params.id,
            creator_id: req.session.loggedInId,
            title: req.body.title,
            artist: req.body.artist,
            filename: req.body.url,
            description: req.body.description
        });
        console.log('success',paintingData);
        res.status(200).json(paintingData);
    } catch (err) {
        console.log('fail',err);
        res.status(400).json(err);
    }
});

// Update Painting
router.put('/:id/:painting_id',withAuth,isGalleryCreator, async(req,res) => {
    try {
        const paintingData = await Painting.update(
            {
                title: req.body.title,
                artist: req.body.artist,
                description: req.body.description
            },
            {
                where: {
                    id: req.params.painting_id,
                },
            });
        res.status(200).json(paintingData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete Painting
router.delete('/:id/:painting_id',withAuth,isGalleryCreator, async(req,res) => {
    try {
        const paintingData = await Painting.destroy(
            {
                where: {
                    id: req.params.painting_id,
                },
            });
        res.status(200).json(paintingData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;