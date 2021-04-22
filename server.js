'use strict';

// need each line of code for every node server build

const express = require('express'); //  express for express server

require('dotenv').config(); // this allow you to use dotenv file

const cors = require('cors');

const app = express();

app.use(cors());// allow REACT app forntend to access data form server

// const superagent = require('superagent'); commit out because refactoring add to weather.js and server.js files

const movies = require('./movies.js');

const weather = require('./weather.js');

const PORT = process.env.PORT || 3001;

// const weatherData = require('./data/weather.json'); // import the json file


// function handleErrors(error, response) {
//   response.status(500).send('Internal error');
// }

// app.get('/', (request, response) => {
//   response.send('this is the server');
// });

// server definition goes next
// servers are set up to listen at some path for particular method(get,post,put)
// listening for GET request at the path /

app.get('/weather', weather);

app.get('/movies', movies);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
