#!/usr/bin/env node

import { sayGreetings, askName, sayHello } from '../src/index.js';
import * as evenGame from '../src/evenGame.js';

sayGreetings();
evenGame.showRules();
console.log('');
const playerName = askName();
sayHello(playerName);
console.log('');

const answersToWin = 3;
let correctAnswers = 0;
let isGameLost = false;
while (correctAnswers < answersToWin && !isGameLost) {
  if (evenGame.askIsEven()) {
    correctAnswers += 1;
  } else {
    isGameLost = true;
  }
}

if (isGameLost) {
  evenGame.showTryAgain(playerName);
} else {
  evenGame.showCongrats(playerName);
}
