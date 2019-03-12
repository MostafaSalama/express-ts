#!/usr/bin/env node
const path = require('path');
const program = require('commander');

program
	.version('1.0.0', '-v, --version')
	.option('-v, --view', 'use pug as template engine', true)
	.option('-m, --mongoose', 'use mongoose.js for db', true)
	.parse(process.argv);

console.log(program);
