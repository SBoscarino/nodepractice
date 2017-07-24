const moment = require('moment');
//requires moment library.

function logger(message) {
  let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  console.log(currentDate, message);
}

module.exports = logger;
//export this method to make to available in other files.
