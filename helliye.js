// const fs = require('fs/promises');

// const FILENAME = 'MovieData.json';

// async function readMovieData() {
//   try {
//     const data = await fs.readFile(FILENAME, 'utf8');
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log(`File ${FILENAME} not found. Creating a new one.`);

//       return []; 
//     }
//     throw error;
//   }
// }

// async function writeMovieData(data) {
//   await fs.writeFile(FILENAME, JSON.stringify(data, null, 2));
// }
// class Usersettings {
//     constructor() {
//       this.genres = [];
//       this.minRating = 0;
//       this.minYear = 0;
//       this.maxYear = 0;
//     }
  
//     async getUserInput() {
//       const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//       });
  
//   this.genres = (await rl.question(' (action): '));
//       const yearRange = await rl.question('(2010 2022): ');
//       if (yearRange) {
//         const [minYear, maxYear] = yearRange.map(Number);
//         this.minYear = minYear;
//         this.maxYear = maxYear;
//       }
//       this.minRating = Number(await rl.question('(6): '));
  
//       rl.close();
//     }
//   }

//   class recommendationEngine {
//     static recommendMovies(movies, Usersettings) {
//       return movies.filter(movie => {
//         return (
//           (!Usersettings.genres || movie.genre.split(',').some(g => Usersettings.genres.includes(g))) &&
//           (movie.year >= Usersettings.minYear || Usersettings.minYear === 0) &&
//           (movie.year <= Usersettings.maxYear || Usersettings.maxYear === 0) &&
//           movie.rating >= Usersettings.minRating
//         );
//       });
//     }
//   }
//   async function main() {
//     try {
//       const movies = await readMovieData();
//       const user = new Usersettings();
//       await user.getUserInput();
  
//       const recommendedMovies = recommendationEngine.recommendMovies(movies, user);
  
//       if (recommendedMovies.length > 0) {
//         console.log('Recommended Movies:');
//         recommendedMovies.forEach(movies => {
//           console.log(`- ${movies.title} (${movies.year}): ${movies.genre}, Rating: ${movies.rating}`);
//         });
//       } else {
//         console.log('No movies found that match your criteria.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }



/////////////////////// کد درست !!!!!!!!!!!!!!!!!!!

// import fs from 'fs/promises';
// import readline from 'readline';

// class FileHandler {
//   static async readJSONFile(MovieData) {
//     try {
//       const data = await fs.readFile(MovieData, 'utf8');
//       return JSON.parse(data);
//     } catch (error) {
//       if (error.code === 'ENOENT') {
//         console.log(`File not found: ${MovieData}. Creating a new one.`);
//         return [];
//       } else {
//         throw error;
//       }
//     }
//   }

//   static async saveJSONFile(MovieData, data) {
//     try {
//       await fs.writeFile(MovieData, JSON.stringify(data, null, 2));
//       console.log(`Data successfully written to ${MovieData}`);
//     } catch (error) {
//       console.error('Error writing file:', error);
//     }
//   }
// }

// class UserPreferencesManager {
//   constructor(preferencesMovieData) {
//     this.preferencesFilePath = preferencesMovieData;
//     this.preferences = {};
//   }

//   async getUserInput() {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     const askQuestion = (query) => {
//       return new Promise((resolve) => rl.question(query, resolve));
//     };

//     try {
//       this.preferences.genre = await askQuestion('Your favorite genre: ');
//       this.preferences.minRating = parseFloat(await askQuestion('The lowest rate: '));
//       this.preferences.minYear = parseInt(await askQuestion("Enter minimum year: "));
//       this.preferences.maxYear = parseInt(await askQuestion("Enter maximum year: "));
//     } catch (error) {
//       console.error('Wrong input:', error.message);
//     } finally {
//       rl.close();
//     }
//   }
// }

// class MovieManager {
//   constructor(MovieData) {
//     this.MovieData = MovieData;
//     this.movies = [];
//   }

//   async loadMovies() {
//     try {
//       this.movies = await FileHandler.readJSONFile(this.MovieData);
//       console.log('Loading...');
//     } catch (error) {
//       console.log('No items found:', error.message);
//     }
//   }

//   filterMovies(preferences) {
//     return this.movies.filter(movie => {
//       const matchesGenre = movie.genre && preferences.genre ? movie.genre.toLowerCase().includes(preferences.genre.toLowerCase()) : true;
//       const meetsRating = movie.rating && preferences.minRating ? movie.rating >= preferences.minRating : true;
//       const withinYearRange = movie.year && preferences.minYear && preferences.maxYear ? movie.year >= preferences.minYear && movie.year <= preferences.maxYear : true;
//       return matchesGenre && meetsRating && withinYearRange;
//     });
//   }
// }

// const movieDatabase = new MovieManager('./MovieData.json');
// const userPreferences = new UserPreferencesManager('./MovieData.json'); // Adjust path if preferences are in a separate file

// async function run() {
//   await movieDatabase.loadMovies();  // Ensure movies are loaded first
//   await userPreferences.getUserInput();
//   const recommendedMovies = movieDatabase.filterMovies(userPreferences.preferences);
//   console.log('Recommended Movies:');
//   recommendedMovies.forEach(movie => {
//     console.log(`- ${movie.title} ${movie.year} - Rating: ${movie.rating}`);
//   });
// }

// run().catch(error => {
//   console.error('An error occurred:', error.message);
// });



//////////////////

import fs from 'fs/promises';
import readline from 'readline';

class FileHandler {
  static async readJSONFile(movieData) {
    try {
      const data = await fs.readFile(movieData, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`File not found: ${movieData}. Creating a new one.`);
        return [];
      } else {
        throw error;
      }
    }
  }

  static async saveJSONFile(movieData, data) {
    try {
      await fs.writeFile(movieData, JSON.stringify(data, null, 2));
      console.log(`Data successfully written to ${movieData}`);
    } catch (error) {
      console.error('Error writing file:', error);
    }
  }
}

class UserSettings {
  constructor(settingsMovieData) {
    this.settingFilePath = settingsMovieData;
    this.settings = {}; // Initialize empty settings object
    this.genres = [];
    this.minRating = 0;
    this.minYear = 0;
    this.maxYear = 0;
  }

  async getUserInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askQuestion = (query) => {
             return new Promise((resolve) => rl.question(query, resolve));
           };
    try {
             this.settings.genre = await askQuestion('Your favorite genre: ');
             this.settings.minRating = parseFloat(await askQuestion('The lowest rate: '));
             this.settings.minYear = parseInt(await askQuestion("Enter minimum year: "));
             this.settings.maxYear = parseInt(await askQuestion("Enter maximum year: "));
           } catch (error) {
             console.error('Wrong input:', error.message);
           } finally {
             rl.close();
          }
         }
       }
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

const movieManager = new RecommendationEngine('./MovieData.json');
const userSettings = new UserSettings('./MovieData.json'); 

async function main() {
  try {
    await movieManager.loadMovies();
    await userSettings.getUserInput();

    const recommendedMovies = movieManager.filterMovies(userSettings.settings);
    console.log('Recommended Movies:');
    recommendedMovies.forEach(movie => {
      console.log(`- ${movie.title} ${movie.year} - Rating: ${movie.rating}`);
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
  
