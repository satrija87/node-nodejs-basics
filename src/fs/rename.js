import path from 'path';
import { fileURLToPath } from 'url';
import { rename as renm } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'files', 'wrongFilename.txt');
const destination = path.join(__dirname, 'files', 'properFilename.md');
const customError = 'FS operation failed';
const rename = async () => {
  try {
    await renm(source, destination);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(customError);
    } else {
      throw error;
    }
  }
};

await rename();
