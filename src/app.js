const angular = require('angular');

angular.module('my-marquee-client', []);

angular.module('my-marquee-client')
       .controller('MainController', MainController);

MainController.$inject = [];

function MainController(){
  this.message = 'hello from angular';
}
