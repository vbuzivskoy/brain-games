#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as evenGame from '../src/games/calcGame.js';

gameplayLoop(evenGame.gameplay, evenGame.rules);
