import gameplayLoop from '../index.js';
import { getRandomNumber } from '../utils.js';

const makeAP = (firstNumber, step) => {
  const maxNumbers = 10;
  const ap = [];
  for (let i = 0; i < maxNumbers; i += 1) {
    ap.push(firstNumber + i * step);
  }
  return ap;
};

const rules = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(4, 11);
  const ap = makeAP(firstNumber, step);
  const posOfCorAnsw = 5;
  const correctAnswer = String(ap[posOfCorAnsw]);
  const questionAndAnswer = {
    question: `${ap.slice(0, posOfCorAnsw).join(' ')} .. ${ap.slice(posOfCorAnsw + 1).join(' ')}`,
    answer: correctAnswer,
  };
  return questionAndAnswer;
};

export default () => gameplayLoop(rules, getQuestionAndAnswer);
