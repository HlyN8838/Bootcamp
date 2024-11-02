

import fs from 'fs/promises';
import readline from 'readline';

export default class FileHandler {
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

export { FileHandler };

