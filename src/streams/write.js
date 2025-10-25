import path from 'path';
import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { pipeline } from 'stream/promises';

const __dirname = import.meta.dirname;
const filepath = path.join(__dirname, 'files', 'fileToWrite.txt');
const write = async () => {
  try {
    const stream = createWriteStream(filepath, { encoding: 'utf8' });
    await pipeline(stdin, stream);
    console.log('Finished writing to file.');
  } catch {
    throw new Error('FS operation failed');
  }
};

await write();
