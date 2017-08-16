const htmlTemplate = require('./movie-search.html');
const movieController = require('./movie-search.controller');

const MovieSearchComponent = {
  template: htmlTemplate,
  controller: movieController
};

module.exports = MovieSearchComponent;
