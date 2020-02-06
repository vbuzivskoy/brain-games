import readlineSync from 'readline-sync';

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

const gameplay = () => {
  const leftArg = Math.floor(Math.random() * 25) + 1;
  const rightArg = Math.floor(Math.random() * 25) + 1;
  const mathSign = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const correctAnswer = calc(leftArg, rightArg, mathSign);
  console.log(`Question: ${leftArg} ${mathSign} ${rightArg}`);
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
