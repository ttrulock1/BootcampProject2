const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');

User.hasMany(Gallery, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

Gallery.belongsTo(User, {
    foreignKey: 'creator_id',
});

User.hasMany(Painting, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

Painting.belongsTo(User, {
    foreignKey: 'creator_id',
});

Gallery.hasMany(Painting, {
    foreignKey: 'gallery_id',
    onDelete: 'CASCADE',
});

Painting.belongsTo(Gallery, {
    foreignKey: 'gallery_id',
});


module.exports = { User, Gallery, Painting };
