// singleton
// Object.create - constructor
//literals ki tarah declare karte hai toh singleton NAHI banta h; constructor se banega

// object literals

const mySym = Symbol("key1")  //interesting

const JsUser = {
    name: "Siddh",
    "full name": "Siddh Singh",
    [mySym]: "myKey1",
    email: "siddh@gmail.com",
    age: 20,
    location: "Jaipur",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "krish@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "krish@microsoft.com"

// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this["full name"]}`);

}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







