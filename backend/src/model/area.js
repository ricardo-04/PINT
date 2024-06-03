const Sequelize = require('sequelize');
const sequelize = require('./database');
const Eventos = require('./eventos');

const Area = sequelize.define('area', {
    ID_AREA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ID_EVENTO: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Eventos,
            key: 'ID_EVENTO'
        }
    },
    NOME_AREA: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Area.belongsTo(Eventos, {foreignKey: 'ID_EVENTO'});
module.exports = Area;
