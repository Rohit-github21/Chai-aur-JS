const name = "rohit"
const repo = 10
// this is old syntax
 console.log(name + repo + " value");

// ``(backtick)this is new syntax
console.log(`Hello my name is ${name} and my repo is ${repo}`);

const gameName = new String ('rohit-rc')

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // in which position character is
console.log(gameName.indexOf('t')); // in which position index is

 const newString = gameName.substring(0 , 5)
 console.log(newString);

 const anotherString = gameName.slice(-6 , 5) // negative number 
 console.log(anotherString);

 const newStringOne = "   rohit   "
 console.log(newStringOne);
 console.log(newStringOne.trim()); // remove the spaces 

 const url = "https://hitesh.com/hitesh%20yadav" 
 
 console.log(url.replace('%20','_'));

 console.log(url.includes('choudary')) // to ask somethings it is in the url or not

 console.log(gameName.split('_'));