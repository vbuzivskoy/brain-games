#!/usr/bin/env node

import { gameplayLoop } from '../src/index.js';
import * as gcdGame from '../src/games/gcdGame.js';

gameplayLoop(gcdGame.gameplay, gcdGame.rules);
