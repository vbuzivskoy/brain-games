import readlineSync from 'readline-sync';

const makeAP = (firstNumber, step) => {
  const maxNumbers = 10;
  const ap = [];
  for (let i = 0; i < maxNumbers; i += 1) {
    ap.push(firstNumber + i * step);
  }
  return ap;
};

const rules = 'What number is missing in the progression?';

const gameplay = () => {
  const firstNumber = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 7) + 4;
  const ap = makeAP(firstNumber, step);
  const posOfCorAnsw = 5;
  const correctAnswer = String(ap[posOfCorAnsw]);
  console.log(`Question: ${ap.slice(0, posOfCorAnsw).join(' ')} .. ${ap.slice(posOfCorAnsw + 1).join(' ')}`);
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
