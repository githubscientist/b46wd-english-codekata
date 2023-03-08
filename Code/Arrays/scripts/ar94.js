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

    // handle the input
    let noOfItems = parseInt(userInput[0]);
    let numbers = userInput[1].split(' ').map(number => parseInt(number));
    let weights = userInput[2].split(' ').map(weight => parseInt(weight));

    // prepare a 2d array
    let numberWeights = [];

    for (let index = 0; index < noOfItems; index++){
        numberWeights.push([numbers[index], weights[index]]);
    }

    numberWeights.sort((a, b) => a[1] - b[1]);

    console.log(numberWeights.map((subArray) => subArray[0]).join(' '));

  //end-here
});