/*
    Eligibility to vote:

    1. the person's age should be greater than or equal to 18
    2. the person should have one of the following documents despite of the age criteria
        - Aadhar card
        - or Voter ID
*/

// let age = 18;
// let hasAadhar = false;
// let hasVoterID = false;

// if (age >= 18 && (hasAadhar || hasVoterID)) {
//     console.log('eligible to vote!');
// } else {
//     console.log('not eligible to vote!');
// }

/*
    1. if statement
    2. if...else statement
    3. multiple if...else statement
    4. nested if...else statement
    5. switch...case
    6. Ternary Operator ?:
*/

// check whether a number is positive or negative or zero

// let number = +5;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else if(number < 0){
//     console.log(number, 'is a negative number');
// } else {
//     console.log(number, 'is a zero');
// }

// let number = 0;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     // number is definitely not greater than zero
//     // number < 0
//     // number = 0
//     if (number < 0) {
//         console.log(number, 'is a negative number');
//     } else {
//         // number should be equal to zero
//         console.log(number, 'is a zero');
//     }
// }

// let number = 4;

// switch (number) {
//     case 1:
//         console.log('the number is 1');
//         break;
//     case 2:
//         console.log('the number is 2');
//         break;
//     default:
//         console.log('the number is neither 1 nor 2');
//         break;
// }

// let number = 0;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     // number is definitely not greater than zero
//     // number < 0
//     // number = 0
//     if (number < 0) {
//         console.log(number, 'is a negative number');
//     } else {
//         // number should be equal to zero
//         console.log(number, 'is a zero');
//     }
// }

// let number = 0;

// switch(number>0){
//     case true:
//         console.log(number, 'is a  positive number');
//         break;
//     case false:
//         switch(number<0){
//             case true:
//                 console.log(number, 'is a negative number');
//                 break;
//             case false:
//                 console.log(number, 'is a zero');
//                 break;
//         }
// }

// let age = 13;

// age >= 18 ? console.log('eligible to vote!') : console.log('not eligible to vote');

// to find the minimum number among two numbers

// let x = 4;
// let y = 13;

// let minimum = x < y ? x : y;

// console.log(minimum);

// let number = 3;

// number > 0 ? console.log(number, 'is a positive number') : number < 0 ? console.log(number, 'is a negative number') : console.log(number, 'is a zero');