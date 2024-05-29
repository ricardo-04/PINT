const Sequelize = require('sequelize');
const sequelize = require('./database');
const Utilizador = require('./utilizador');
const AlbumFotos = require('./albumfotos');

const Fotos = sequelize.define('fotos', {
    ID_FOTO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ID_FUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Utilizador,
            key: 'ID_FUNCIONARIO'
        }
    },
    ID_ALBUM: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: AlbumFotos,
            key: 'ID_ALBUM'
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
    timestamps: true,
    freezeTableName: true
});

Fotos.belongsTo(Utilizador, {foreignKey: 'ID_FUNCIONARIO'});
Fotos.belongsTo(AlbumFotos, {foreignKey: 'ID_ALBUM'});
module.exports = Fotos;
