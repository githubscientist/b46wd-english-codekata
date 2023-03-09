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

    let size = parseInt(userInput[0]);
    let passportNumbers = userInput[1].split(' ');

    // Algorithm #1
    // let unique = [];

    // passportNumbers.forEach(passportNumber => {
    //     if (!unique.includes(passportNumber)) {
    //         unique.push(passportNumber);
    //     }
    // });

    // console.log(unique.join(' '));

    // Algorithm #2
    let hashTable = {};
    let unique = [];

    for (let passportNumber of passportNumbers) {
        hashTable[passportNumber] = true;
    }

    for (let passportNumber of passportNumbers) {
        if (hashTable[passportNumber]) {
            unique.push(passportNumber);
            hashTable[passportNumber] = false;
        }
    }

    console.log(unique.join(' '));

  //end-here
});