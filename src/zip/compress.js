import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import process from 'process';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const srcpath = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const descpath = path.join(import.meta.dirname, 'files', 'archive.gz');
const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(srcpath);
  const destination = createWriteStream(descpath);
  await pipeline(source, gzip, destination);
};

await compress();
