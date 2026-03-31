function sayhello() {
 console.log("hello javascript");
};

sayhello();


function add(a, b) {
    return a + b;
}

let ans = add(1, 2);
console.log(ans);


function greeting(guest = "Guest"){
      console.log( `hi ${guest}`);
}

greeting("Friends");


function addunlimited(...nums){
    let sum = 0;
 nums.forEach( function(val){
    sum = sum + val; 
 });
  console.log(sum);
}

addunlimited(1, 2, 3, 4, 5, 6, 7, 8, 9);


function addunlimited(...nums){
    let ans = nums.reduce(function (acc, val){
     return acc + val; 
    }, 0);
    console.log(ans);
}

addunlimited(1, 2, 3, 4, 5, 6, 7, 8, 9);


(function(){
 console.log("I run Instantly!");
})();


function parent(){
let a = 12;
 function child(){
   console.log(a);
 }
 child();
}

parent();


let arr = ["apple", "banana", "mango", "grapes", "guava"];
 
arr.push("pear");
arr.unshift("Orange");

console.log(arr);


let arr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


let obj = {
    name: "karan",
    age:  17, 
    city: "uttrakhand",
};

for (let key in obj ){
    console.log(key);
}


setTimeout(function(){
    console.log("times up");
}, 3000);




