// console.log('SUP');

// need each line of code for every node server build
const express = require('express');

const cors = require('cors');

require('dotenv').config(); // this allow you to use dotenv file

const weatherData = require('./data/weather.json'); // import the json file

const app = express();


app.use(cors());// allow REACT app forntend to access data form server

const PORT = process.env.PORT || 3001;

function Forecast(date, description) {
  this.date = date;
  this.description = description;
}

// server definition goes next
// servers are set up to listen at some path for particular method(get,post,put)
// listening for GET request at the path /

app.get('/', (request, response) => {
  // get the request, send a response
  response.send('hello');
});

app.get('/weather', (request, response) => {
  let locationData = `lat: ${weatherData.lat} lon: ${weatherData.lon}`;
  response.json(locationData);
});

app.get('/weather', (request, response) => {
let newArray = Forecast.map(weatherData);
  response.json(newArray);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
