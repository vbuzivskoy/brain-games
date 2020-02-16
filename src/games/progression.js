import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const progressionLength = 10;

const makeProgression = (firstNumber, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + i * step);
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(4, 11);
  const progression = makeProgression(firstNumber, step);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  const questionAndAnswer = {
    question: `${progression.slice(0, hiddenElementIndex).join(' ')} .. ${progression.slice(hiddenElementIndex + 1).join(' ')}`,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
