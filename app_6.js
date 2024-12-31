// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// let new_number = [];

//  for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];

//     if(!new_number.includes(element)){
//         new_number.push(element);
//     } 
//  }

//  console.log(new_number);



// we can also use this...
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let num = new Set(numbers);
console.log(num);