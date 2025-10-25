import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __dirname = path.dirname(import.meta.filename);
const filepath = path.join(__dirname, 'files', 'fileToRead.txt');
const customError = 'FS operation failed';

const read = async () => {
  try {
    const content = await readFile(filepath, 'utf-8');
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(customError);
    } else {
      throw error;
    }
  }
};

await read();
