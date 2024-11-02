
 import FileHandler from './FileHandlers.js';
 import RecommendationEngine from './recommendationEngine.js';
 import UserSettings from './Usersettings.js';

 const movieManager = new RecommendationEngine('./MovieData.json');
 const userSettings = new UserSettings('./MovieData.json'); 
 const fileHandler = new FileHandler ('./FileHandlers.js')


 async function main() {
   try {
     await movieManager.loadMovies();
     await userSettings.getUserInput();
 
     const recommendedMovies = movieManager.filterMovies(userSettings.settings);
     console.log('❌ No item available ❌');
     recommendedMovies.forEach(movie => {
       console.log(`- ${movie.title} ${movie.year} - Rating: ${movie.rating}`);
     });
   } catch (error) {
     console.error('An error occurred:', error.message);
   }
 }
 
 main();


