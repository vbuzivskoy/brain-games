#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as calcGame from '../src/games/calcGame.js';

gameplayLoop(calcGame.gameplay, calcGame.rules);
