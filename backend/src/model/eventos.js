const Sequelize = require('sequelize');
const sequelize = require('./database');
const Centro = require('./centro');
const Utilizador = require('./utilizador');
const AlbumFotos = require('./albumFotos');
const Locais = require('./locais');
const Forum = require('./forum');

const Eventos = sequelize.define('eventos', {
    ID_EVENTO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    ID_CENTRO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Centro,
            key: 'ID_CENTRO'
        }
    },
    ID_LOCAL: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Locais,
            key: 'ID_LOCAL'
        }
    },
    ID_CRIADOR: {
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
    ID_FORUM: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Forum,
            key: 'ID_FORUM'
        }
    },
    NOME_EVENTO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    TIPO_EVENTO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DATA_EVENTO: {
        type: Sequelize.DATE,
        allowNull: true
    },
    DISPONIBILIDADE: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    LOCALIZACAO: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    TIPO_AREA: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    N_PARTICIPANTSE: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ID_APROVADOR: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, 
{
    timestamps: false,
    freezeTableName: true
});
Eventos.belongsTo(Centro, {foreignKey: 'ID_CENTRO'});
Eventos.belongsTo(Utilizador, {foreignKey: 'ID_CRIADOR'});
Eventos.belongsTo(AlbumFotos, {foreignKey: 'ID_ALBUM'});
Eventos.belongsTo(Locais, {foreignKey: 'ID_LOCAL'});
Eventos.belongsTo(Forum, {foreignKey: 'ID_FORUM'});

module.exports = Eventos;
