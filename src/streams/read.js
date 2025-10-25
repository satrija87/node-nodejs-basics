import path from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';

const __dirname = import.meta.dirname;
const filepath = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
  try {
    const stream = createReadStream(filepath);
    await pipeline(stream, stdout, { end: false });
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
