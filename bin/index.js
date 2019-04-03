#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const createApp = require('../app/create');
program
	.version('0.0.2', '-v, --version')
	.parse(process.argv);

createApp(program.args[0]);
