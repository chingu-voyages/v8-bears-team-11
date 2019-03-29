// const express = require('express');

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';

const port = process.env.PORT || 4005;
const production = process.env.NODE_ENV === 'production';
const dbStatus = production ? 'prod' : 'env';

const dbURI = `mongodb://localhost:27017/hospitalDB-${dbStatus}`;

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos

if(production){
  mongoose.connect(dbURI, { useNewUrlParser: true });
}

if(!production) {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
  });

  mongoose.connection.on('error', (err) => console.log(err.message))
    .on('close', (err) => console.log('Mongoose connection error'))
    .on('connected', () => {
      console.log('Mongoose connected to '+ dbURI) 
      console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
  });
}


const UserModel = require('./api/models/user.js');

app.use(session({
  secret: 'conduit',
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: false
}));
const apiRoutes = require('./api/routes/routes');
app.use('/api/v1',apiRoutes);

app.use((req, res) => {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

const server = app.listen( port, () => console.log(`Express server puerto ${server.address().port}: \x1b[32m%s\x1b[0m`,'online'));
