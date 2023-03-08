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

    // create a frequency table
    let frequencies = {};

    for (let number of numbers) {
        frequencies[number] = 0;
    }

    for (let number of numbers) {
        frequencies[number]++;
    }

    let frequencyArray = Object.entries(frequencies);
    frequencyArray.sort((a, b) => a[1] - b[1]);
    console.log(frequencyArray.map(item => item[0]).join(' '));

  //end-here
});