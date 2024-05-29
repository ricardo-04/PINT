const { DataTypes } = require('sequelize');
const sequelize = require('./database'); 
const Eventos = require('./eventos'); 
const Utilizador = require('./utilizador'); 

const ParticipantesEvento = sequelize.define('participantes_evento', {
  ID_FUNCIONARIO: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Utilizador,
      key: 'ID_FUNCIONARIO'
    }
  },
  ID_EVENTO: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Eventos,
      key: 'ID_EVENTO'
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

ParticipantesEvento.belongsTo(Utilizador, {foreignKey: 'ID_FUNCIONARIO'});
ParticipantesEvento.belongsTo(Eventos, {foreignKey: 'ID_EVENTO'});
module.exports = ParticipantesEvento;