#!/usr/bin/env node
import { sayGreetings, askName, sayHello } from '../src/index.js';

sayGreetings();
sayHello(askName());
