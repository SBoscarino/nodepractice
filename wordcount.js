let randomString = `Was justice improve age article between. No projection as up preference reasonably delightful celebrated. Preserved and abilities assurance tolerably breakfast use saw. And painted letters forming far village elderly compact. Her rest west each spot his and you knew. Estate gay wooded depart six far her. Of we be have it lose gate bred. `;


console.log('length of string: ', randomString.length); //number of characters in entier string.
let words = randomString.split(' '); //this is an array of strings now.
console.log("Number of words: ", words.length); //number of words (separated by spaces).

let biggestWord = "";
for (let i = 0; i < words.length; i++) {
  if (biggestWord.length < words[i].length) {
    biggestWord = words[i];
  }
}
console.log("This is the longest word: ", biggestWord);
