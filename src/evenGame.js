import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const showRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const showCongrats = (playerName) => {
  console.log(`Congratulations, ${playerName}!`);
};

const showTryAgain = (playerName) => {
  console.log(`Let's try again, ${playerName}!`);
};

// Function asks a player if a random number is even.
// If user answers correct the function returns true, if not - false.
const askIsEven = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export {
  showRules, showCongrats, showTryAgain, askIsEven,
};
