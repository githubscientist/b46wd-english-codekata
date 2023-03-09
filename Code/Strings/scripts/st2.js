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

    // let chars = userInput[0];

    // Algorithm #1
    // let hashTable = {};

    // for (let char of chars) {
    //     hashTable[char] = true;
    // }

    // if (Object.keys(hashTable).length == 3) {
    //     console.log('Wonder');
    // } else {
    //     console.log(-1);
    // }

    // Algorithm #2
    // let uniqueChars = [];
    // for (let char of chars) {
    //     if (!uniqueChars.includes(char)) {
    //         uniqueChars.push(char);
    //     }
    // }

    // if (uniqueChars.length == 3) {
    //     console.log('Wonder');
    // } else {
    //     console.log(-1);
    // }

    // Algorithm #3
    // let uniqueSet = new Set(chars);

    // uniqueSet.size == 3 ? console.log('Wonder') : console.log(-1);

    // Algorithm #4
    let chars = userInput[0].split('');

    // remove all the duplicates
    for (let i = 0; i < chars.length; i++){
        for (let j = i + 1; j < chars.length; ){
            if (chars[i] == chars[j]) {
                // delete chars[j]
                chars.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    chars.length == 3 ? console.log('Wonder') : console.log(-1);

  //end-here
});