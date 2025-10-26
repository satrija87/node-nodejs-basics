import path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirpath = path.join(__dirname, 'files');
const customError = 'FS operation failed';
const list = async () => {
  try {
    const files = await readdir(dirpath);
    console.log(files);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(customError);
    } else {
      throw error;
    }
  }
};

await list();
