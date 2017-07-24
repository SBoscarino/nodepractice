const readlineSync = require('readline-sync');
const logger = require('./logger');
const chalk = require('chalk');
const moment = require('moment');

console.log(logger()); //this works.


function year(message) {
  let theyear = moment().format("DDDo");
  return theyear;
};
console.log("It is the", year()); //this works.


function timetonow () {
  let beginning = moment().startOf('day');
  let end = moment().format("s");
  console.log(end);
  let answer = 86400 - end;
  return answer;
} // i do not understand.
console.log("Since the beginning of today, this many seconds have elapsed", timetonow());


function dst () {
  let daylightst = (moment([]).isDST());
  if (daylightst === 'true') {
    console.log("it is daylight savings time.");
  }
  else {
    console.log("it is not daylight savings time.")
  }
}
console.log(dst()); // this works



function leapies () {
  let leap = moment([]).isLeapYear();
  if (leap === 'true') {
    console.log("it is a leap year.");
  }
  else {
    console.log("it is not a leap year")
  }
}
console.log(leapies()); // this works
