// let person = {
//     age: 20,
//     name: 'krish',
//     isEligible: true, 
//     problems: [2, 4, 5, 7],
//     averageScore: 84.37
// };

// console.log(person);

// console.log(person.problems);

// for (let key in person) {
//     console.log(person[key]);
// }

// console.log(Object.keys(person));

// for (let key of Object.keys(person)) {
//     console.log(person[key]);
// }

// console.log(Object.values(person));

// for (let value of Object.values(person)) {
//     console.log(value);
// }

// let person = {
//     age: 20,
//     name: 'krish',
//     isEligible: true, 
//     problems: [2, 4, 5, 7],
//     averageScore: 84.37
// };

// // console.log(Object.entries(person));

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

let array = [1, 4, 4, 6, 5, 6, 7, 6, 4, 3, 2, 1, 2, 4];

// create an empty object
let frequencyTable = {};

// iterate through the array
// make an entry in frequencyTable of every item from the array
for (let index = 0; index < array.length; index++) {
    frequencyTable[array[index]] = 0;
}

for (let index = 0; index < array.length; index++) {
    frequencyTable[array[index]]++;
}


// console.log(Object.entries(frequencyTable));
console.log(frequencyTable);

