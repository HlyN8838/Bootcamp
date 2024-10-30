const readline = require('readline');
const {readMovieData} = require('./fileHandlers');  /// chera???
const Usersettings = require('./Usersettings');
const recommendationEngine = require('./recommendationEngine');

async function main() {
  try {
    const movies = await readMovieData();
    const user = new Usersettings();
    await user.getUserInput();

    const recommendedMovies = recommendationEngine.recommendMovies(movies, user);

    if (recommendedMovies.length > 0) {
      console.log('Recommended Movies:');
      recommendedMovies.forEach(movie => {
        console.log(`- ${movie.title} (${movie.year}): ${movie.genre}, Rating: ${movie.rating}`);
      });
    } else {
      console.log('No movies found that match your criteria.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();

 ////////////////


 ///////////// ERROR ///// An error occurred: ReferenceError: readMovieData is not defined

 
//  async function main() {
//   try {
//     const movies = await readMovieData();

//     const minYear = 2010;
//     const maxYear = 2020;
//     const minRating = 6;
//     const excludedGenre = 'action';

//     const filteredMovies = filterMovies(movies, minYear, maxYear, minRating, excludedGenre);

//     if (filteredMovies.length > 0) {
//       console.log('Recommended Action Movies (2010-2020) with Rating >= 6:');
//       filteredMovies.forEach(movie => {
//         console.log(`- ${movie.title} (${movie.year}): ${movie.genre}, Rating: ${movie.rating}`);
//       });
//     } else {
//       console.log('No action movies found in that criteria.');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// main();

///////////////////

//////////// eslahe negin

// const readline = require('readline');
//  const {readMovieData, writeMovieData} = require('./fileHandlers');  /// chera???
//  const UserManager = require('./Usersettings');
//  const MovieRecommender = require('./recommendationEngine');


// async function main() {
//   const userManager = new UserManager();
//   const movieRecommender = new MovieRecommender();

//   try {
//     const movies = await userManager.readMovieData();
//     await userManager.getUserInput();

//     const recommendedMovies = movieRecommender.recommendMovies(movies, userManager);
//     movieRecommender.displayRecommendations(recommendedMovies);

//     await userManager.savePreferences();
//     console.log('User preferences have been saved.');
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// main();




