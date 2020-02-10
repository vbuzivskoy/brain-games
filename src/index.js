import readlineSync from 'readline-sync';
import { sayGreetings, sayHello, askName } from './utils.js';

const gameplayLoop = (gameRules, getQuestionAndAnswer) => {
  sayGreetings();
  console.log(`${gameRules}\n`);
  const playerName = askName();
  sayHello(playerName);

  const answersToWin = 3;
  for (let round = 1; round <= answersToWin; round += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const quizQuestion = questionAndAnswer.question;
    console.log(`Question: ${quizQuestion}`);
    const correctAnswer = questionAndAnswer.answer;
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default gameplayLoop;
