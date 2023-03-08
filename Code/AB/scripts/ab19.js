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

    // handle the inputs
    let [firstNumber, secondNumber] = userInput[0].split(' ').map(number => parseInt(number));

    // generate all the divisors and find the divisor which divides 
    // commonly both the numbers
    // find the smallest number
    let smallest = firstNumber < secondNumber ? firstNumber : secondNumber;

    for (; smallest >= 1; smallest--){
        if (firstNumber % smallest == 0 && secondNumber % smallest == 0) {
            console.log(smallest);
            break;
        }
    }

  //end-here
});