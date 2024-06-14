const express = require('express');
const sequelize = require('./src/model/database');
const albumFotosRoute = require('./src/routes/albumFotosRoute');

const AlbumFotos = require('./src/model/albumFotos');
const Area = require('./src/model/area');
const AreaLocal = require('./src/model/areaLocal');
const Centro = require('./src/model/centro');
const Comentarios = require('./src/model/comentarios');
const Eventos = require('./src/model/eventos');
const Forum = require('./src/model/forum');
const Fotos = require('./src/model/fotos');
const Locais = require('./src/model/locais');
const SubArea = require('./src/model/subArea');
const Utilizador = require('./src/model/utilizador');
const ParticipantesEvento = require('./src/model/participantes_evento');

const app = express();

//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());


sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com a base de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas com a base de dados:', err);
  });

  
//Rotas
app.use('/albumFotos', albumFotosRoute);

app.listen(app.get('port'),()=>{
console.log("Start server on port "+app.get('port'))
})