MainController.$inject = ['MovieService'];

function MainController(movies){
  this.movie = '';

  this.search = function search(){
    console.log('searching....');
    console.log(this.movie);

    movies.getMovieResults(this.movie)
         .then(movieSearch => this.movieData = movieSearch);
  };
}

module.exports = MainController;
