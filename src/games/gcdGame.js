import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  const minNumber = Math.min(a, b);
  let gcdNumber = 1;
  for (let i = 2; i <= minNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcdNumber = i;
    }
  }
  return String(gcdNumber);
};

const rules = 'Find the greatest common divisor of given numbers.';

const gameplay = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = gcd(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
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
