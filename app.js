const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("Enter a bumber ", function(numberO){
  rl.question("Enter another bumber ", function(numberP){
      console.log(`Your bumbers are ${numberO} and ${numberP}!`);
      var numP = `${numberP}`
      rl.close();
  });
});
