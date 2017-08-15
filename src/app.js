const angular = require('angular');
const movieData = require('../mocks/movie-search.json');

angular.module('my-marquee-client', []);

angular.module('my-marquee-client')
       .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
  this.movieData = movieData.results;
}
