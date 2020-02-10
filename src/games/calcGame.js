import gameplayLoop from '../index.js';
import { getRandomNumber } from '../utils.js';

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

const getQuestionAndAnswer = () => {
  const leftArg = getRandomNumber(1, 15);
  const rightArg = getRandomNumber(1, 15);
  const mathSign = ['+', '-', '*'][getRandomNumber(0, 2)];
  const correctAnswer = calc(leftArg, rightArg, mathSign);
  const questionAndAnswer = {
    question: `${leftArg} ${mathSign} ${rightArg}`,
    answer: correctAnswer,
  };
  return questionAndAnswer;
};

export default () => gameplayLoop(rules, getQuestionAndAnswer);
