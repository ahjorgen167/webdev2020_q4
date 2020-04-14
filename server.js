const express = require('express');
const sportsStar = require('./controller/sports-star.controller');

const app = express();

const mongoose = require('mongoose');

const mongoEndpoint = 'mongodb://127.0.0.1/sports';

mongoose.connect(mongoEndpoint, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Note that it is common practice got backend APIs in Node to start with the api prefix
// to distinguish them from frontend routes
app.use('/api/sportsStar', sportsStar);

app.listen(3001, function() {
    console.log('Starting server');
});