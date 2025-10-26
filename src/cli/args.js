import { argv } from 'process';
const parseArgs = () => {
  const args = argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    const value = args[i + 1];
    args[i].startsWith('--') && value
      ? console.log(`${args[i].slice(2)} is ${value}`)
      : console.log(`${args[i]} is ${value}`);
  }
};

parseArgs();
