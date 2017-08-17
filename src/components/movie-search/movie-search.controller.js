MainController.$inject = ['MovieService'];

function MainController(movie){
  this.message = 'hello from angular';

  movie.getMovieResults('Jack Reacher')
       .then(movieSearch => this.movieData = movieSearch);
}

module.exports = MainController;
