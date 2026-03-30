let arr = [10, 20, 30, ];
arr.splice(1, 1, 15);
console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
 let newarr =arr.filter(function(val) {
    if (val > 4) return true;
});


let arr = [1, 2, 3, 4, 5, 6];

let ans = arr.reduce(function (accumulator, val) {
 return accumulator + val;
}, 0);

console.log(ans);


let arr = [10, 20, 30, 40];
let result = arr.find((num) =>{
return num > 25;
});

console.log(result);


let arr = [10, 20, 30, 40, 50];

let result = arr.some((num) =>{
    return num > 23; 
});

console.log(result);


let arr = [10, 20, 30, 40, 50];

let result = arr.every((num) => {
    return num > 5;
});

console.log(result);


let arr = [1, 2, 3, 4, 5, 6];
let [a, b, , c] = arr;