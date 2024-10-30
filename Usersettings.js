
const {readMovieData, writeMovieData} = require('./fileHandlers');
const readline = require('readline');

class Usersettings {
  constructor() {
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

this.genres = (await rl.question(' (action): '));
    const yearRange = await rl.question('(2010 2022): ');
    if (yearRange) {
      const [minYear, maxYear] = yearRange.map(Number);
      this.minYear = minYear;
      this.maxYear = maxYear;
    }
    this.minRating = Number(await rl.question('(6): '));

    rl.close();
  }
}


module.exports = Usersettings;

/////////////////// eslahi negin 

// const fs = require('fs').promises;
// const path = require('path');
// const readline = require('readline');

// class UserManager {
//   constructor() {
//     this.genres = [];
//     this.minRating = 0;
//     this.minYear = 0;
//     this.maxYear = 0;
//   }

//   async readMovieData(filename = 'MovieData.json') {
//     const filePath = path.join(__dirname, 'Data', filename);
//     const data = await fs.readFile(filePath, 'utf-8');
//     return JSON.parse(data);
//   }

//   async getUserInput() {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     const question = (query) => new Promise((resolve) => rl.question(query, resolve));

//     this.genres = (await question('Enter genres (e.g., action, comedy): ')).split(',').map(genre => genre.trim());

//     const yearRange = await question('Enter year range (e.g., 2010 2022): ');
//     if (yearRange) {
//       const [minYear, maxYear] = yearRange.split(' ').map(parseFloat);
//       this.minYear = minYear;
//       this.maxYear = maxYear;
//     }

//     this.minRating = parseFloat(await question('Enter minimum rating (e.g., 6): '));

//     rl.close();
//   }
// }

// module.exports = UserManager;




