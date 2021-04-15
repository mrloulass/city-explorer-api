'use strict';

// need each line of code for every node server build

const express = require('express'); //  express for express server

require('dotenv').config(); // this allow you to use dotenv file

const cors = require('cors');

const app = express();

app.use(cors());// allow REACT app forntend to access data form server

const PORT = process.env.PORT || 3001;

const weatherData = require('./data/weather.json'); // import the json file


function Forecast(day) {
  this.description = day.weather.description;
  this.date = day.datetime;
}

function handleErrors(error, response) {
  response.status(500).send('internal error');
}

// server definition goes next
// servers are set up to listen at some path for particular method(get,post,put)
// listening for GET request at the path /

app.get('/weather', (request, response) => {
  try {
    const allForecastData = weatherData.data.map(day => new Forecast(day));
    response.send(allForecastData);
    // response.json(allForecastData);
    console.log(allForecastData);
  } catch (error) {
    handleErrors(error, response);
  }
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
