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

    // let p = 1000;
    // let n = 2;
    // let r = 5;
    
    let [p, n, r] = userInput[0].split(' ').map(item => parseFloat(item));

    // console.log(p, n, r);

    let simpleInterest = p * n * (r / 100);
    console.log(simpleInterest.toFixed(2));

  //end-here
});