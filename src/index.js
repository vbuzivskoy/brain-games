import readlineSync from 'readline-sync';

const askNameAndSayHello = () => {
  console.log("Welcome to the Brain Games!\n");
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}`);
};

export default askNameAndSayHello;
