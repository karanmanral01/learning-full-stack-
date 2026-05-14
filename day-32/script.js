for(let i = 1; i <= 10; i++){
    console.log(i);
}



for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}



let sum = 0;

for(let i = 1; i <= 100; i++){
    sum = sum + i;
}

console.log(sum);



let str = "javascript";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--){
    reversed = reversed + str[i];
}

console.log(reversed);




let num = 7;
let isPrime = true;

for(let i = 2; i < num; i++){
    if(num % i === 0){
        isPrime = false;
    }
}

if(isPrime){
    console.log("Prime Number");
}else{
    console.log("Not Prime Number");
}



let num = 5;
let fact = 1;

for(let i = 1; i <= num; i++){
    fact = fact * i;
}

console.log(fact);



let arr = [10, 45, 2, 99, 23];
let largest = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(largest);




let str = "hello world";
let count = 0;

for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if(
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
    ){
        count++;
    }
}

console.log(count);



let a = 0;
let b = 1;

console.log(a);
console.log(b);

for(let i = 1; i <= 8; i++){
    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}



let str = "madam";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--){
    reversed = reversed + str[i];
}

if(str === reversed){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}