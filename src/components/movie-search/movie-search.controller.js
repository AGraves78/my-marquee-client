MainController.$inject = ['MovieService'];

function MainController(movie){
  this.message = 'hello from angular';
  this.movieData = movie.getMovieResults();
}

module.exports = MainController;
