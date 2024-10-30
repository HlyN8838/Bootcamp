const Usersettings = require("./Usersettings");

class recommendationEngine {
  static recommendMovies(movies, Usersettings) {
    return movies.filter(movie => {
      return (
        (!Usersettings.genres || movie.genre.split(',').some(g => Usersettings.genres.includes(g))) &&
        (movie.year >= Usersettings.minYear || Usersettings.minYear === 0) &&
        (movie.year <= Usersettings.maxYear || Usersettings.maxYear === 0) &&
        movie.rating >= Usersettings.minRating
      );
    });
  }
}
    
      module.exports = recommendationEngine;