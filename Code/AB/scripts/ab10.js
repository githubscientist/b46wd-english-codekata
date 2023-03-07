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
    let [a, b, c] = userInput[0].split(' ').map((item) => parseInt(item));

    // solve for the roots
    let root1 = (-b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);
    let root2 = (-b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);

    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));

  //end-here
});