import readlineSync from 'readline-sync';

const getRandomNumber = (lowerNumer, higherNumber) => Math.round(Math.random()
  * (higherNumber - lowerNumer)) + lowerNumer;

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => {
  console.log(`Hello, ${name}\n`);
};

export {
  getRandomNumber, sayGreetings, sayHello, askName,
};
