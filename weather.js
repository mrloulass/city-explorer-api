'use strict';

const superagent = require ('superagent');

function Forecast(day) {
  this.description = day.weather.description;
  this.date = day.datetime;
}

const weather = (request, response) => {
  superagent
    .get('https://api.weatherbit.io/v2.0/forecast/daily')
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
};

module.exports = weather;
