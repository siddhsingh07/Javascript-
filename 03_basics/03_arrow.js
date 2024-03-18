const user = {
    username: "siddh",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "krrish"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "siddh"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "siddh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "siddh"
    console.log(this);
}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return function

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "siddh"})


console.log(addTwo(3, 5));


// const myArray = [2, 3, 4, 7, 8]

// myArray.forEach(function () { })
// myArray.forEach(() => {})
// myArray.forEach(() => ())













