// Importação CommonJS modules - Firebase
require('dotenv').config();
const firebase = require('../services/firebase');
console.log(firebase);

// Importação CommonJS modules
const express = require('express');

// Criar aplicação WEB express
const app = express();
// Rotas (End Points)
app.get('/', (req, res) => {
  // console.log('Rota / foi chamada.');
  res.render('login');
});

// Exportar a aplicação
module.exports = app;