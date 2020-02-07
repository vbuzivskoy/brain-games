#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as primeGame from '../src/games/primeGame.js';

gameplayLoop(primeGame.gameplay, primeGame.rules);
