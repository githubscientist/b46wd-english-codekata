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
    // let a = parseInt(userInput[0]);
    // let b = parseInt(userInput[1]);
    // let c = parseInt(userInput[2]);

    let [a, b, c] = userInput.map((number) => parseInt(number));

    // nested if...else statements

    // if (a > b && a > c) {
    //     console.log(a);
    // } else {
    //     // a is not the greatest
    //     // either b or c could be the greatest
    //     if (b > c) {
    //         console.log(b);
    //     } else {
    //         // b is also not the greatest
    //         // c is definitely the greatest
    //         console.log(c);
    //     }
    // }

    // multiple if...else statements

    // if (a > b && a > c) {
    //     console.log(a);
    // } else if(b>c) {
    //     console.log(b);
    // } else {
    //     console.log(c);
    // }

    // 5>6 ? console.log(true) : console.log(false);
    // conditional operator
    // (a > b && a > c) ? console.log(a) : (b>c) ? console.log(b) : console.log(c);

    

  //end-here
});