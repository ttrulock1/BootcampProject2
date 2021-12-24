const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Painting extends Model { }

Painting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gallery_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'gallery',
                key: 'id',
            },
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'painting',
    }
);

module.exports = Painting;

// this is going another another colum that is a cloudinary id. It would be a source atribute if it was on the front end. 