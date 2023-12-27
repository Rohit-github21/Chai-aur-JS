// array 
// shallow Copy object share the same referance
// Deep Copy object  do not share same referance they share the copy
const myArr = [ 'Rohit', 1, 2, 3, 4, 5]
// const myHero = ['shaktiman', 'Rohitman']

// const myArr2 = new Array(1 ,2, 3, 4, 5)

// console.log(myArr[0]);

// Array methods

// myArr.push("yadav")  // push is used to add the value in array
// myArr.push(9)  // push is used to add the value in array

// myArr.pop() // pop is used to remove the last value 
// myArr.unshift(8) // Is used to add any element in start 
// myArr.shift()  // remove the starting element
// myArr.shift()
// console.log(myArr.includes(5));  // check wheather 5 is here or not
// console.log(myArr.indexOf('Rohit'));

// const newArr = myArr.join() // join is used to covert array to string 

// console.log(myArr);
// console.log(newArr);

// Slice, Splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3) // 1 and 2 no is include  but not 3 no is not include in slice

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
 
// slice do not manuplate the original array 
//splice manuplate or change the original array