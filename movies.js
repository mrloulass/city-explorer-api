'use strict';

let cache = require('./modules/moviesCache.js');

const superagent = require('superagent');

function Movies(infor) {
  this.title = infor.title;
  this.overview = infor.overview;
  this.image_url = `https://image.tmdb.org/t/p/w500/${infor.poster_path}`;
}

const movies = (request, response) => {
  const key = request.query.city;
  if (cache[key] && (Date.now() - cache[key][0]) < (50000)) {
    console.log('Cache hit');
    let previousResponseData = cache[key][1];
    response.status(200).send(previousResponseData);
  } else {
    console.log('Cache miss');
    superagent
      .get('https://api.themoviedb.org/3/search/movie')
      .query({
        api_key: process.env.MOVIE_API_KEY,
        query: request.query.city
      })
      .then(movieInfor => {
        cache[key] = [Date.now(), movieInfor.body.results.map(infor => (new Movies(infor)))];
        response.status(200).send(movieInfor.body.results.map(infor => (new Movies(infor))));
      })
      .catch(err => response.status(500).send('error', err));
  }
};
module.exports = movies;
