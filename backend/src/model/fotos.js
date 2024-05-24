const Sequelize = require('sequelize');
const sequelize = require('./database');
const Utilizador = require('./utilizador');
const AlbumFotos = require('./albumfotos');

const Fotos = sequelize.define('fotos', {
    NFOTO: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        allowNull: false
    },
    NFUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Utilizador,
            key: 'NFUNCIONARIO'
        }
    },
    NALBUM: {
        type: Sequelize.NUMERIC,
        allowNull: true,
        references: {
            model: AlbumFotos,
            key: 'NALBUM'
        }
    },
    LEGENDA: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    FOTO: {
        type: Sequelize.BLOB,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Fotos;
