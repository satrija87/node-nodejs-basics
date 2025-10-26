import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';

const __dirname = path.dirname(import.meta.filename);
const workerPath = path.join(__dirname, 'worker.js');
const countStart = 10;
const countCPUs = cpus().length;

const performCalculations = async () => {
  const workerPromises = Array.from({ length: countCPUs }, (_, i) => {
    const worker = new Worker(workerPath, { workerData: countStart + i });

    return new Promise((resolve) => {
      worker.on('message', (data) => resolve(data));
      worker.on('error', () => resolve({ status: 'error', data: null }));
      worker.on('exit', (code) => {
        if (code !== 0) resolve({ status: 'error', data: null });
      });
    });
  });

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
