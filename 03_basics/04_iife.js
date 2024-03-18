// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("siddh")




// (function definition) (execution call)

// global scope ke pollution se problem hoti hai bhot baar toh global scope ke variables ke pollution ko hatane ke liye IIFE ka use kiya 