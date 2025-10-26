import path from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { stdout } from 'process';
const calculateHash = async () => {
  const __dirname = path.dirname(import.meta.filename);
  const filepath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const input = createReadStream(filepath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
