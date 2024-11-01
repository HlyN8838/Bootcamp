

import FileHandler from './fileHandler';

class RecommendationEngine {
  constructor(movieData) {
    this.movieData = movieData;
    this.movies = [];
  }

  async loadMovies() {
    try {
      this.movies = await FileHandler.readJSONFile(this.movieData);
      console.log('Loading...');
    } catch (error) {
      console.log('No items found:', error.message);
    }
  }

  filterMovies(settings) {
    return this.movies.filter(movie => {
      return (
        (!settings.genre || movie.genre.toLowerCase().includes(settings.genre.toLowerCase())) &&
        (!settings.minRating || movie.rating >= settings.minRating) &&
        (!settings.minYear || movie.year >= settings.minYear) &&
        (!settings.maxYear || movie.year <= settings.maxYear)
      );
    });
  }
}

export default RecommendationEngine;