#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as evenGame from '../src/games/evenGame.js';

gameplayLoop(evenGame.gameplay, evenGame.rules);
