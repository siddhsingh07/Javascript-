

// marvelHeros.push(dcHeros) //array inside an array

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

//spread operator for joining two arrays 
const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Siddh"));
console.log(Array.from("Siddh"));

console.log(Array.from({ name: "Siddh" })); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));












