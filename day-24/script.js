class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    logged() {
        console.log("User Logged in ")
    }
}

let user1 = new User("karan", "karan@gmail.com")
let user2 = new User("rahul", "rahul@gmail.com")
let user3 = new User("sachin", "sachin@gmail.com")

user1.logged();
user2.logged();
user3.logged();



let product = {
    name: "nothing phone",
    price: 15000,
    discount: function () {
        return this.price - 4000;
    },
};

console.log(product.discount());


class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;

    }
    drive(){
        return this.brand + "-" + this.speed;
    }
}

  let car1 = new Car("BMW", 320);
  let car2 = new Car("G63", 240);


class Student {
    constructor(name, rollnumber) {
        this.name = name;
        this.rollnumber = rollnumber;
    }

    introduce() {
        return this.name + " " + this.rollnumber;
    }
}

let st1 = new Student("karan", 28)


let obj = {
    sayName: function(){
        console.log(this);
    },
    sayArrowName: ()=>{
        console.log(this);
    }
}

obj.sayName();
obj.sayArrowName();


function User(val) {
    this.name = val;
}

User.prototype.login = function () {
    console.log("loggedin");
}

let user1 = new User("aman");
let user2 = new User("rahul");


function abcd () {
    console.log(this.name)
}

let obj = {
    name: "karan",
}

abcd.call(obj);


function abcd (a, b, c) {
    console.log(this.name)
}

let obj = {
    name: "karan",
}

abcd.apply(obj, [1, 2, 3]);


function abcd (a, b, c) {
    console.log(this.name)
}

let obj = {
    name: "karan",
}

let fnc = abcd.bind(obj, [1, 2, 3]);
fnc();





