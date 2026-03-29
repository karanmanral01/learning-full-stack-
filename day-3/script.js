let arr = [1, 2, 3, 4];
let newarr = arr.map(function(val){
   return val * val;
});



let arr = [5, 12, 8, 20, 3];
let newarr = arr.filter((val) => {
   return val > 10; 
});



let arr = [10, 20, 30];

let newarr = arr.reduce((acc, val) => {
   return acc + val;
});



let arr = [12, 15, 3, 8, 20];

let ans = arr.find((val) => {
    return val < 10;
});



let arr = [45, 60, 28, 90];
let newarr = arr.some((val) => {
    return val < 35;
});



let arr = [2, 4, 6, 8, 10];
let ans = arr.every((val) => {
 return val % 2 === 0;
});



let fullName = ["karan", "Manral"];
let [firstName , lastName ] = fullName;



let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];


let countries = ["USA", "UK"];
countries = ["India", ...countries];



let arr = [1, 2, 3 ];
let arr2 = [4, ...arr];