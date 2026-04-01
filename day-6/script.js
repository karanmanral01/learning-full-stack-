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


function runTwice(fn) {
  fn();
  fn();
}

runTwice(function(){
    console.log("Hello");
});


let global = 0;
function impure(a){
    global++;
    console.log(a + global);
}

impure(2);
impure(2);


function pure(a, b){
  console.log(a + b);
}

pure(1, 2);
pure(1, 2);


function abcd({name , age} ){
console.log(name , age);
}

abcd({name: "karan", age: 27});


let obj = {
   name: "karan",
   fnc : function (){
    let fnc2 = () => {
        console.log(this);
    };
    fnc2();
   },
};

obj.fnc();


let arr = [1, 2, 3, 4, 5, 6];
let newarr = arr.map(function(val){
    return val * val;
});

console.log(newarr);


let arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr.filter(function (val){
    return val % 2 === 0;
});

console.log(newarr);


let salary = [1000, 2000, 3000]
let ans = salary.reduce(function (acc, val){
return acc + val;
}, 0);

console.log(ans);


let names = [ "karan", "anshu", "sandeep", "pol", "dol"];
let ans = names.some(function (val){
 return val.length > 3;
});

console.log(ans);/


let names = [ "karan", "anshu", "sandeep", "pol", "dol"];
let ans = names.every(function (val){
 return val.length > 3;
});

console.log(ans);


let user = {
    name: "karan ",
    age: 23, 
    email: "h@h.j",
}

Object.freeze(user);  
user.age = 34;

console.log(user);


 let user = {
    name: "karan ",
    age: 23, 
    email: "h@h.j",
}

Object.seal(user);
user.name = "aman";
user.social = "instagram";

console.log(user);


let user = { 
    name: "karan",
    age: 32,
    address: {
        city: "Bhopal",
        pincode: 232434,
    },
}

console.log(user.address.city);

