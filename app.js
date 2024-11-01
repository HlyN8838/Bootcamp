

 import RecommendationEngine from './recommendationEngine';
 import UserSettings from './Usersettings';

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


