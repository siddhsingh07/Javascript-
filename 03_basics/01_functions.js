// function printMyName() {
//     console.log("S");
//     console.log("I");
//     console.log("D");
//     console.log("D");
//     console.log("H");
// }

// printMyName() 

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // // console.log("Siddh");
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("siddh"));

// console.log(loginUserMessage("siddh"));
//undefined just logged in

// rest operator

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "siddh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

const myNewArr = [200,400,100,600]

function returnSecondValue(getarray) {
    return getarray[2]
}

console.log(returnSecondValue(myNewArr))

console.log(returnSecondValue([200,400,100,600]));



































