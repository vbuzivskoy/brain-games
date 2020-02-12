import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const questionAndAnswer = {
    question,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
