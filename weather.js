'use strict';
// values for the keys in cache are an array:
//        arr[0] is the timstamp
//        arr[1] is the actual data
let cache = require('./modules/weatherCache.js');

const superagent = require('superagent');

function Forecast(day) {
  this.description = day.weather.description;
  this.date = day.datetime;
}

const weather = (request, response) => {
  const key = 'weather-' + request.query.lat + request.query.lon;
  if (cache[key] && (Date.now() - cache[key][0]) < (50000)) {
    console.log('Cache hit');
    let previousResponseData = cache[key][1];
    response.status(200).send(previousResponseData);
  } else {
    console.log('Cache miss');
    superagent
      .get('https://api.weatherbit.io/v2.0/forecast/daily')
      .query({
        key: process.env.WEATHER_API_KEY,
        units: 'I',
        lat: request.query.lat,
        lon: request.query.lon
      })
      .then(weatherData => {
        cache[key] = [Date.now(), weatherData.body.data.map(day => (new Forecast(day)))];
        response.status(200).send(weatherData.body.data.map(day => (new Forecast(day))));
      })
      .catch(err => response.status(500).send('error', err));
  }
};
module.exports = weather;
