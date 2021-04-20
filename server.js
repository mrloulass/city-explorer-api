'use strict';

// need each line of code for every node server build

const express = require('express'); //  express for express server

require('dotenv').config(); // this allow you to use dotenv file

const cors = require('cors');

const app = express();

app.use(cors());// allow REACT app forntend to access data form server

const superagent = require('superagent');

const PORT = process.env.PORT || 3001;

// const weatherData = require('./data/weather.json'); // import the json file


function Forecast(day) {
  this.description = day.weather.description;
  this.date = day.datetime;
}

function Movies(infor) {
  this.title = infor.title;
  this.overview = infor.overview;
}

// function handleErrors(error, response) {
//   response.status(500).send('Internal error');
// }

// app.get('/', (request, response) => {
//   response.send('this is the server');
// });

// server definition goes next
// servers are set up to listen at some path for particular method(get,post,put)
// listening for GET request at the path /

app.get('/weather', (request, response) => {
  superagent.get('https://api.weatherbit.io/v2.0/forecast/daily')
    .query({
      key: process.env.WEATHER_API_KEY,
      units: 'I',
      lat: request.query.lat,
      lon: request.query.lon
    })
    .then(weatherData => {
      response.send(weatherData.body.data.map(day => (new Forecast(day))));
    })
    .catch(err => (err.request, err.response));
});

app.get('/movies', (request, response) => {
  superagent.get('https://api.themoviedb.org/3/search/movie')
    .query({
      api_key: process.env.MOVIE_API_KEY,
      query: request.query.city
    })
    .then(movieInfor => {
      response.send(movieInfor.body.results.map(infor => (new Movies(infor))));
    })
    .catch(err => (err.request, err.response));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
