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

  // console.log(userInput[0], userInput[1], userInput[2]);
  // console.log(userInput.join(' '));
  let result = '';
  for (let index = 0; index < userInput.length; index++){
    result = result + userInput[index] + ' ';
  }

  console.log(result.trim());

  //end-here
});