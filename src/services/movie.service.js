const movieData = require('../../mocks/movie-search.json');
MovieService.$inject = [];

function MovieService(){
  return {
    getMovieResults: getMovies
  };
  function getMovies(){
    return movieData.results;
  }
}

module.exports = MovieService;
