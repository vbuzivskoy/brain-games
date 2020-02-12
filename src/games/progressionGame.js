import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const makeProgression = (firstNumber, step) => {
  const maxNumbers = 10;
  const ap = [];
  for (let i = 0; i < maxNumbers; i += 1) {
    ap.push(firstNumber + i * step);
  }
  return ap;
};

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(4, 11);
  const progression = makeProgression(firstNumber, step);
  const posOfCorAnsw = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[posOfCorAnsw]);
  const questionAndAnswer = {
    question: `${progression.slice(0, posOfCorAnsw).join(' ')} .. ${progression.slice(posOfCorAnsw + 1).join(' ')}`,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
