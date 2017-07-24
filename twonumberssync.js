const readlineSync = require('readline-sync');
const logger = require('./logger'); // this is using the logger.js file.
const chalk = require('chalk');
//requires chalk library to work.

let number1 = readlineSync.question(chalk.cyan("Please enter a number."));
let number2 = readlineSync.question("Enter another number.");
console.log(`You entered ${number1} and ${number2}`);
console.log(logger());
