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
    let noOfTeams = parseInt(userInput[0]);

    let goals = userInput[1].split(' ').map((item) => parseInt(item));

    let goalsByLast3Teams = goals.slice(noOfTeams - 3,).reduce((previousValue, currentValue) => previousValue + currentValue);

    // iterate through the array goals
    // for every team, find the goal rate and print it
    // goals.forEach((goal) => {
    //     console.log(goal - goalsByLast3Teams);
    // });

    console.log(goals.map(goal => goal - goalsByLast3Teams).join(' '));

  //end-here
});