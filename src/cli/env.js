const parseEnv = () => {
  const res = Object.keys(process.env)
    .filter((i) => i.startsWith('RSS_'))
    .map((el) => console.log(`${el}=${process.env[el]}`));

  console.log(res);
};

parseEnv();
