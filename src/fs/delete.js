import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __dirname = path.dirname(import.meta.filename);
const customError = 'FS operation failed';
const filename = path.join(__dirname, 'files', 'fileToRemove.txt');
const remove = async () => {
  try {
    await rm(filename);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(customError);
    } else {
      throw error;
    }
  }
};

await remove();
