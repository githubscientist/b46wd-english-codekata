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

    let n = parseInt(userInput[0]);

    // let patterns = [];
    // for (let i = 1; i <= lines; i++){
    //     patterns.push('*');
    // }

    // for (let i = 1; i <= lines; i++){
    //     console.log(patterns.join('  '));
    //     patterns.pop();
    // }

    for (let i = 0; i < n; i++){
        let result = '';
        for (let j = 0; j < n - i; j++){
            result = result + '*  ';
        }
        console.log(result.trim());
    }
    
  //end-here
});