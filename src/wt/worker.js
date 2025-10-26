import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  try {
    const resdata = nthFibonacci(Number(workerData));
    parentPort.postMessage({ status: 'resolved', data: resdata });
  } catch {
    parentPort.postMessage({ status: 'error', data: null });
  }
};

sendResult();
