const router = require('express').Router();
const { User, Gallery, Painting } = require('../models');
const withAuth = require('../utils/auth');
const isGalleryCreator = require('../utils/isGalleryCreator');

// GET the homepage
router.get('/', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    try {
        const galleryData = await Gallery.findAll({
            include: [
                {
                    model: User,
                }]
        });
        const galleries = galleryData.map((gallery) =>
            gallery.get({ plain: true })
        );

        // for (var idx = 0; idx < galleries.length; idx++) {
        //     galleries[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
        // }
        res.render('homepage', {
            galleries,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Galleries'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// 
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login', {
        pageDescription: 'Galleries'
    });
});

// Route for signing up
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup', {
        pageDescription: 'Galleries'
    });
});

// Route for the user's dashboard
router.get('/dashboard', async (req, res) => {
    // Redirect to login if the user is not logged in
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    try {
        galleries = [];
        if (req.session.loggedIn) {
            const galleryData = await Gallery.findAll({
                where: {
                    creator_id: req.session.loggedInId
                }
            });
            galleries = galleryData.map((gallery) =>
                gallery.get({ plain: true })
            );
        }

        // // Convert the date to a string to display in the template
        // for (var idx = 0; idx < posts.length; idx++) {
        //     posts[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
        // }
        res.render('dashboard', {
            galleries,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Your Gallery'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route for the form to create a new gallery 
router.get('/new-gallery', withAuth, async (req, res) => {
    res.render('newGallery', {
        pageDescription: 'Your Gallery',
        loggedIn: req.session.loggedIn
    });
});

// Route for the form to create a new blog post
router.get('/paintings/:id', async (req, res) => {
    try {
        const galleryData = await Gallery.findOne({
            include: [
                {
                    model: Painting,
                    include: {
                        model: User
                    }
                },
                { model: User }
            ],
            where: {
                id: req.params.id
            }
        });
        const gallery = galleryData.get({ plain: true });
        // post.dateStringForPost = post.createdAt.toLocaleDateString();

        // Convert each comment created date to a date string
        // for (var idx = 0; idx < post.comments.length; idx++) {
        //     post.comments[idx].dateStringForComment = post.comments[idx].createdAt.toLocaleDateString();
        // }

        res.render('paintings', {
            gallery,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Painting'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Route for editing an existing gallery
router.get('/gallery-update/:id', withAuth, isGalleryCreator, async (req, res) => {
    try {
        const galleryData = await Gallery.findOne({
            where: {
                id: Number(req.params.id)
            }
        });
        const gallery = galleryData.get({ plain: true });

        res.render('galleryUpdate', {
            gallery,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Your Dashboard'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;