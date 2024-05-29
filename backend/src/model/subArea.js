const Sequelize = require('sequelize');
const sequelize = require('./database');
const Area = require('./area');

const SubArea = sequelize.define('sub_area', {
    ID_SUB_AREA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ID_AREA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Area,
            key: 'ID_AREA'
        }
    },
    NOME_ATIVIDADE: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

SubArea.belongsTo(Area, {foreignKey: 'ID_AREA'});
module.exports = SubArea;
