// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array);

// console.log(array[5]);

// array[5] = 6; // in-place

// array[0] = 10;

// console.log(array);

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);


// for (let index = 0; index < array.length ; index++){
//     console.log(array[index]);
// }

// for (let index = array.length - 1; index>=0 ; index--){
//     console.log(array[index]);
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array[4]);

// console.log(array.length);

// for (let index = 0; index < array.length; index++){
//     console.log(array[index]);
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// for (let index = 0; index < array.length; index++){
//     console.log(array[index]);
// }

// let index = 0; 
// while (index < array.length){
//     console.log(array[index]);
//     index++;
// }

// let index = 0; 
// do {
//     console.log(array[index]);
//     index++;
// } while (index < array.length);

// let array = [1, 2, 3, 4, 5, 6, 7];

// // for...of loop
// for (let number of array) {
//     console.log(number);
// }

// // for...in loop
// for (let index in array) {
//     console.log('array[',index,']', ':', array[index]);
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// array.forEach()

// let array = [1, 2, 3, 4, 5, 6, 7];

// for (let item of array) {
//     if (item == 5) break;
//     console.log(item);
// }

// let countries = ['Japan', 'China', 'India', 'USA', 'Germany'];

// for (let country in countries) {
//     console.log(country);
// }

// let array = [1, 2, 3, 4];

// console.log(array.length);

// let aFunction = (value, index, array) => {
//     console.log(value, index, array[index]);
// }

// let array = [1, 2, 3, 4];

// array.forEach(aFunction);

// function sorter(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// // let array = [5, 1, 2, 4, 3, 7, 6];
// let names = ['apple', 'app', 'application', 'apparently', 'apply'];

// // sort
// // in-place
// // array.sort((a, b) => {
// //     return b - a;
// // });

// // array.sort(sorter);
// names.sort(sorter);

// // console.log(array);

// console.log(names);

// let array = [1, 2, 3, 4];

// array.push(5);
// array.push(7);

// array.pop();
// array.pop();

// array.unshift(10);
// array.shift();

// array.splice(2, 2, 12);

// console.log(array);

// let squarer = (item) => {
//     return item ** 2;
// }

// let array = [1, 2, 3, 4, 5];

// // map
// // console.log(array.map(squarer)); // [1, 4, 9, 16, 25]

// console.log(array);

// let array = [1, 2, 3, 4, 5];

// console.log(array.join(', '));

function reducer(previousValue, currentValue) {
    return previousValue * currentValue;
}

let array = [1, 2, 3, 4, 5];

console.log(array.reduce(reducer));
