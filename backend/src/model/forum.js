const Sequelize = require('sequelize');
const sequelize = require('./database');
const Utilizador = require('./utilizador');

const Forum = sequelize.define('forum', {
    ID_FORUM: {
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
    NEVENTO: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    DATAFORUM: {
        type: Sequelize.DATE,
        allowNull: false
    },
    DESCRICAO: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    freezeTableName: true
});
Forum.belongsTo(Utilizador, {foreignKey: 'ID_FUNCIONARIO'});
module.exports = Forum;
