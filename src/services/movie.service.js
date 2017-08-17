const movieData = require('../../mocks/movie-search.json');
MovieService.$inject = ['$http'];

function MovieService($http){
  const baseUrl = 'https://my-marquee.herokuapp.com/search/';
  return {
    getMovieResults: getMovies
  };
  function getMovies(movie){
    const url = `${baseUrl}${movie}`;
    return $http.get(url)
                .then(response => {
                  return response.data.results;
                });
  }
}

module.exports = MovieService;
