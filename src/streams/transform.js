import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().split('').reverse().join(''));
    callback();
  },
});

const transform = async () => {
  try {
    await pipeline(stdin, reverseTransform, stdout);
  } catch {
    throw new Error('Stream transformation failed');
  }
};

await transform();
