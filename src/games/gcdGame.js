import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (a, b) => {
  const minAgument = Math.min(a, b);
  let currentGCD = 1;
  const maxPossibleGCD = Math.floor(minAgument / 2);
  for (let i = 2; i <= maxPossibleGCD; i += 1) {
    if (a % i === 0 && b % i === 0) {
      currentGCD = i;
    }
  }
  return currentGCD;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = gcd(firstNumber, secondNumber);
  const questionAndAnswer = {
    question: `${firstNumber} ${secondNumber}`,
    answer: String(correctAnswer),
  };
  return questionAndAnswer;
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
