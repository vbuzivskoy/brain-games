import gameplayLoop from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const questionAndAnswer = {
    question: number,
    answer: correctAnswer,
  };
  return questionAndAnswer;
};

export default () => gameplayLoop(rules, getQuestionAndAnswer);
