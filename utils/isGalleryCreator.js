const { Gallery, Painting, User } = require('../models');

// Check that the user is the creator of the post
const isGalleryCreator = async (req, res, next) => {
    try {
        const galleryData = await Gallery.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: User }
            ],
        });
        const gallery = galleryData.get({ plain: true });

        // Make sure the logged in user was the creator of the blog post
        if (req.session.loggedInId !== gallery.user.id) {
            res.redirect('/');
            return;
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = isGalleryCreator;