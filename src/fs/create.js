import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(import.meta.filename);
const customError = 'FS operation failed';
const data = 'I am fresh and young';
const create = async () => {
  const filepath = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await writeFile(filepath, data, { flag: 'wx' });
  } catch {
    throw new Error(customError);
  }
};

await create();
