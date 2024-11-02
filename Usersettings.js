

import readline from 'readline';

export default class UserSettings {
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

       export{UserSettings};



