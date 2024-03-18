const name = "siddh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('siddh-singh-com')

// console.log(typeof gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0, 4)
// //last value won't be included 
// console.log(newString);

// const anotherString = gameName.slice(0, -5)
// console.log(anotherString);

// const newStringOne = "     siddh   "

// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://sidd.com/sidd%20singh"

// console.log(url);
// console.log(url.replace('sidd ', 'krish'));
// console.log(url.replace('%20', '-'));

// console.log(url.includes('krish'));

const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.split(' '));
const words = str.split(' ')
console.log(words[5]);

const chars = str.split('')
console.log(chars[8]);

const strCopy = str.split()
console.log(strCopy);  // it gives an array

console.log(gameName.split('-'));

