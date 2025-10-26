import { fork } from 'child_process';
import path from 'path';

const __dirname = path.dirname(import.meta.filename);
const filePath = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = (args) => {
  fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2', 'hello', 'Olga']);
