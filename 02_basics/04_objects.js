// const tinderUser = new Object() -- Singleton object
const tinderUser = {} // -- Non-Singleton object

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Siddh",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = { obj1, obj2 }

//target-source
// const obj3 = Object.assign( {}, obj1, obj2, obj4)

// spread operator 
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "sidd@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

// console.log(users[1].email);

// very important 

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
