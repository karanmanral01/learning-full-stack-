let obj = {
    name: "karan",
    age:  18, 
    khana:  "daal chaawal",
};

 console.log(obj.khana);
 console.log(obj["name"]);
 console.log(obj["age"]);



let obj = {
    name:"sandeep",
    class: 12,
    hobby: "reading books",
};

let aa = "name";
console.log(obj[aa]);


const user = {
name: "karan",
address: {
    city: "Bhopal",
    pincode: 462001,
    location: {
        lat: 23.2,
        lng: 77.4,
    },
 },
};

console.log(user.address.location.lng);


const user = {
    name: "karan",
    address: {
        city: "uttrakhand",
        pincode: 263676,
        location: {
            lat: 24.2,
            lan: 66.3,
        },
    },
};

let {lat,lan} = user.address.location;


let user = {
    name: "karan",
    age: 18,
    email: "test@test.com",
};

for (let key in user) {
    console.log(key, user[key]);
}


let obj = {
    name: "karan",
    age: 18,
    email: "karan@gmail.com",
};

console.log(Object.keys(obj));


let user = {
    name: "karan",
    age: 18,
};

console.log(Object.entries(user));


let obj = {
    name: "karan",
    age: 18, 
    email: "karanmanral@gmail.com",
};

let obj2 = {...obj};


let obj = {
    name: "karan",
    age: 18,
    email: "karanmanral@gmail.com",
};

 let obj2 = Object.assign({price: Infinity}, obj);

 console.log(obj2);
 console.log(obj);


let obj = {
    name: "karan",
    age: 26,
    email: "karanmanral@gmail.com",
    address: {
        city: "bhopal",
    },
}

let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);


let obj = {
    name: "karan",
    age: 26,
    email: "karanmanral@gmail.com",
    addresses: {
        city: "bhopal",
    },
}

console.log(obj?.address?.city);


let role = "admin";

let obj = {
    name: "karan",
    age: 26,
    email: "karanmanral@gmail.com",
    address: {
        city: "bhopal",
    },
    [role]: "harsh",
}

console.log(obj);


let obj = {
    name: "karan",
    age: 23,
    isEnroled: true,
}


const obj = {
    true: "yes", 
    12: "answer",
};

console.log(obj[12]);
console.log(obj[true]);


const user = {
    "first-name": "karan",
};

console.log(user["first-name"]);


let key = "age";

const user = {
    age: 26, 
};

console.log(user[key]);


const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 24.4,
        lng: 54.8,
    },
};

console.log(locations.coordinates.lat);


const locations = {
    city: "Bhopal",
    coordinatess: {
        lat: 24.4,
        lng: 54.8,
    },
};

console.log(locations?.coordinates?.lng);

const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 24.4,
        lng: 54.8,
    },
};

let { city } = locations;
let { lat } = locations.coordinates;


const user = {
    "first-name": "karan",
};

let {"first-name": firstName } = user;


const course = {
    title: "javascript",
    duration: "4 week",
};

for (let key in course){
    console.log(key);
}


const course = {
    title: "javascript",
    duration: "4 week",
};

console.log(Object.entries(course));



const original = {a: 1, b: 2,};
const copy = {...original};


const obj1 = { info: {score: 80,},};
const clone = {...obj1};
clone.info.score = 100;
console.log(obj1.info.score);



const obj1 = { info: {score: 80,},};
let newobj = structuredClone(obj1);
newobj.info.score = 100
console.log(newobj);


const person = {};
console.log(person?.profile?.name);






