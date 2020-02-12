import readlineSync from 'readline-sync';

const answersToWin = 3;

const startGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}\n`);

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

export default startGame;
