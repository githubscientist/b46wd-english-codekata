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

    let [rows, cols] = userInput[0].split(' ').map(number => parseInt(number));

    let wall = [];
    for (let i = 1; i <= cols; i++) {
        wall.push('*');
    }

    let hollow = [];
    for (let i = 1; i <= cols; i++){
        if (i == 1 || i == cols) {
            hollow.push('*');
        } else {
            hollow.push(' ');
        }
    }

    for (let i = 1; i <= rows; i++){
        if (i == 1 || i == rows) {
            console.log(wall.join(' '));
        } else {
            console.log(hollow.join(' '));
        }
    }

  //end-here
});