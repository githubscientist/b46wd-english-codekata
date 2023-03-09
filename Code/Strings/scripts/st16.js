// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function isNumber(word) {
    let number = parseFloat(word);

    if (isNaN(number)) return false;
    else return true;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

//     console.log(userInput[0].split(' ').filter((word) => {
//         return !isNaN(parseFloat(word));
//     }).reduce((previousValue, currentValue) => {
//         return previousValue > currentValue ? parseInt(previousValue) : parseInt(currentValue);
//   }));
    
    let words = userInput[0].split(' ');
    let numbers = [];

    for (let word of words) {
        if (isNumber(word)) {
            numbers.push(word);
        }
    }

    // numbers = numbers.map(number => parseInt(number));
    for (let index = 0; index < numbers.length; index++){
        numbers[index] = parseInt(numbers[index]);
    }

    // console.log(Math.max(...numbers));

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    console.log(largest);

    // console.log(...numbers);
    

  //end-here
});