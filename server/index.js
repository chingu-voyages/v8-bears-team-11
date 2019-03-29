'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './api/routes/routes';
import cors from 'cors';
import session from 'express-session';

const app = express();

const port = process.env.PORT || 4000;
const production = process.env.NODE_ENV === 'production';
const dbStatus = production ? 'prod' : 'env';
const dbURI = `mongodb://localhost/hospitalDB-${dbStatus}`;



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

const db = mongoose.connection;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  autoIndex: false,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
});

db.on('error', (err) => console.error.bind(console, 'connection error:'));
db.on('close', (err) => console.log('Mongoose connection error'));
db.on('open', () => {
    console.log( `Mongoose connected to ${dbURI}`)
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

app.use(session({
  secret: 'work hard',
  cookie: {
    maxAge: 60000
  },
  resave: true,
  saveUninitialized: false
}));

app.use('/api/v1',apiRoutes);

app.use((req, res) => {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

const server = app.listen( port, () => console.log(`Express server puerto ${server.address().port}: \x1b[32m%s\x1b[0m`,'online'));
