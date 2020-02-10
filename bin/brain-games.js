#!/usr/bin/env node
import { sayGreetings, askName, sayHello } from '../src/utils.js';

sayGreetings();
sayHello(askName());
