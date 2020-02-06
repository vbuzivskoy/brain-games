import readlineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => {
  console.log(`Hello, ${name}\n`);
};

const gameplayLoop = (gameplayFunction, gameRules) => {
  sayGreetings();
  console.log(`${gameRules}\n`);
  const playerName = askName();
  sayHello(playerName);

  const answersToWin = 3;
  let correctAnswers = 0;
  let isGameLost = false;
  while (correctAnswers < answersToWin && !isGameLost) {
    const answers = gameplayFunction();
    const playerAnswer = answers.playerAns;
    const correctAnswer = answers.correctAns;
    if (playerAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isGameLost = true;
    }
  }

  if (isGameLost) {
    console.log(`Let's try again, ${playerName}!`);
  } else {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export {
  gameplayLoop, sayGreetings, sayHello, askName,
};
