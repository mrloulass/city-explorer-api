'use strict';

const superagent = require('superagent');

function Movies(infor) {
  this.title = infor.title;
  this.overview = infor.overview;
  this.image_url = `https://image.tmdb.org/t/p/w500/${infor.poster_path}`;
}

const movies = (request, response) => {
  superagent
    .get('https://api.themoviedb.org/3/search/movie')
    .query({
      api_key: process.env.MOVIE_API_KEY,
      query: request.query.city
    })
    .then(movieInfor => {
      response.send(movieInfor.body.results.map(infor => (new Movies(infor))));
    })
    .catch(err => (err.request, err.response));
};

module.exports = movies;
