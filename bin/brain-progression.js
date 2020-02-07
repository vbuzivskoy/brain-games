#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as progressionGame from '../src/games/progressionGame.js';

gameplayLoop(progressionGame.gameplay, progressionGame.rules);
