const marvel_heroes = ["Thor","Ironman", "Spiderman"]
const dc_heroes = ["Superman", "flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


const all_heros = marvel_heroes.concat(dc_heroes) 
console.log(all_heros);

// In concat we form new variable and add two or more array 

// In push they work In existing array

const new_all_heros = [...marvel_heroes,...dc_heroes] // most common in use to join two array it is called spread method
console.log(new_all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5],6,[1,2]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // to ask question var is or not in array
console.log(Array.from("Hitesh")); // convert to string
console.log(Array.from({name: "Hitesh"})); // Intersting result


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// Returns a new array from a set of elements.