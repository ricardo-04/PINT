const Sequelize = require('sequelize');
const sequelize = require('./database');

const AlbumFotos = sequelize.define('albumfotos', {
    NALBUM: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = AlbumFotos;
