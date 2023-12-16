// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt,

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 13216516513169151651845n;

// Referance (Non-Primitive)

// Array, Objects,Functions

const heros = ["shaktiman","naagraj"]

 let myObj = {
    name: "Rohit",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof anotherId)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) call by value
// Heap(Non-Primitive) call by referance
// datatypes are based on memory allocation


let test = "RohitYadav"
let anothername = "test"
anothername = "rohit code"

console.log(test);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "rohit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
