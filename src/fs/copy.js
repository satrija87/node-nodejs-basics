import { cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(import.meta.filename);
const source = path.join(__dirname, 'files');
const destination = path.join(__dirname, 'files_copy');
const customError = 'FS operation failed';
const copy = async () => {
  try {
    await cp(source, destination, { recursive: true, errorOnExist: true, force: false });
  } catch {
    throw new Error(customError);
  }
};
await copy();
