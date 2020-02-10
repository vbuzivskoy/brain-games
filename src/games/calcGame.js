import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (leftArg, rightArg, mathSign) => {
  let result;
  switch (mathSign) {
    case '+':
      result = leftArg + rightArg;
      break;
    case '-':
      result = leftArg - rightArg;
      break;
    case '*':
      result = leftArg * rightArg;
      break;
    default:
      result = NaN;
  }
  return String(result);
};

const gameplay = () => {
  const leftArg = getRandomNumber(1, 25);
  const rightArg = getRandomNumber(1, 25);
  const mathSign = ['+', '-', '*'][getRandomNumber(1, 3)];
  const correctAnswer = calc(leftArg, rightArg, mathSign);
  console.log(`Question: ${leftArg} ${mathSign} ${rightArg}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  const answers = {
    playerAns: playerAnswer,
    correctAns: correctAnswer,
  };
  return answers;
};

export {
  rules, gameplay,
};
