import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import process from 'process';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';

const descpath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const srcpath = path.join(import.meta.dirname, 'files', 'archive.gz');
const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(srcpath);
  const destination = createWriteStream(descpath);
  await pipeline(source, unzip, destination);
};

await decompress();
