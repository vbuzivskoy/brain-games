import readlineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

export { sayGreetings, askName, sayHello };
