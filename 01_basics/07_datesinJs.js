// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString()); //best
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23,16,3,20)

// let myCreatedDate = new Date("2023-01-14")

// let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleDateString());

//month start with 0 (january =  0)

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));
//converted from miliseconds to seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1); // month starts with 0
// console.log(newDate.getDay() );  //day starts with 1


let myDate = new Date()
console.log(myDate.toLocaleString('default', {
    weekday: "long",
    month: "short"
    
}));
