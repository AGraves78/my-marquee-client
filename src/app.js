const angular = require('angular');

//services
const MovieService = require('./services/movie.service');

//application
angular.module('my-marquee-client', []);

angular.module('my-marquee-client')
       .controller('MainController', MainController)
       .factory('MovieService', MovieService);

MainController.$inject = ['MovieService'];

function MainController(movie){
  this.message = 'hello from angular';
  this.movieData = movie.getMovieResults();
}
