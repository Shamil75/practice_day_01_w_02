// const array = [1,5,8,4,9,6,2,7,3,10,11,15,18,14,19,16,12,17,13,20];
// let n = array.length;

// for(let i=0; i<n-1; i++){
//     for(let j=1; j<n; j++){
//         if(array[j-1] > array[j]){
//             let temp = array[j-1];
//             array[j-1] = array[j];
//             array[j] = temp;
//         }
//     }
// }

// console.log(array);




// we can also use this sort() function


const array = [1,5,8,4,9,6,2,7,3,10,11,15,18,14,19,16,12,17,13,20];

const sort_array = array.sort(function(a,b) {return a - b});
console.log(sort_array);
