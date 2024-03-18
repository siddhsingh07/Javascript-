// Primitive types

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId );

// even if value is same but it will be unique


// Reference types (Non-primitive)

// Array, Objects, Function
// datatypes of these are - function, function, object function

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// console.log(heros);
// console.log(myObj.age);

// let myFunction = function () {
//     console.log("hello world");
// }

// myFunction();
// console.log(typeof myFunction);

// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof userEmail);

// console.log(typeof anotherId);


//************* MEMORY ************

// Stack (Primitive) copy milta hai,
// Heap(Non - Primitive) reference milta hai

// PRIMITVE COPY 
let myYoutubeName = "siddhsingh@youtubedotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName); 


// NON-PRIMITIVE REFERENCE
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "siddh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
