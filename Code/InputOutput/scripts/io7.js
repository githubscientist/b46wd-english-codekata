// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

//   console.log(userInput[0].split('').join(' '));
    
    let word = userInput[0];

    // create an empty string
    let result = '';

    // traverse through the word
    for (let index = 0; index < word.length; index++){
        result = result + word[index] + ' ';
    }

    console.log(result.trim());
    

  //end-here
});