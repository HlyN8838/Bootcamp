

// روشی برای خواندن از فایل:

const fs = require('fs/promises');

const FILENAME = 'MovieData.json';

async function readMovieData() {
  try {
    const data = await fs.readFile(FILENAME, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`File ${FILENAME} not found. Creating a new one.`);
      return []; 
    }
    throw error;
  }
}

async function writeMovieData(data) {
  await fs.writeFile(FILENAME, JSON.stringify(data, null, 2));
}

module.exports = {readMovieData, writeMovieData};

/////// eslahe negin

// const fs = require('fs/promises');

// const FILENAME = 'MovieData.json';

// async function readMovieData() {
//     try {
//         const data = await fs.readFile(FILENAME, 'utf8');
//         return JSON.parse(data);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.log(`File ${FILENAME} not found. Creating a new one.`);
//             return [];
//         }
//         throw error;
//     }
// }

//  async function writeMovieData(filePath, data) {
//   try {
//       await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//       console.log(` written in the file ${FILENAME}`);
//   } catch (error) {
//       console.error('Error writing file:', error);
//   }
// }

// module.exports = { readMovieData, writeMovieData };

/////////////////////////




