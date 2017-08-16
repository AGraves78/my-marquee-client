const angular = require('angular');

//services
const MovieService = require('./services/movie.service');

//components
const MovieSearchComponent = require('./components/movie-search/index');

//application
angular.module('my-marquee-client', []);

angular.module('my-marquee-client')
       .factory('MovieService', MovieService)
       .component('movieSearch', MovieSearchComponent);
