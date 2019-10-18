
const map = new Map();

map.set("key1", "student1").set(2, 40).set("isHere", true)
console.log('Map', map);

console.log(map.get(2)) //40
console.log(map.has('4')) // false
console.log(map.size)

const map2 = new Map([
  ["Canada", "Vancouver"],
  ["Japan", "Tokyo"],
  ["Spain", "Madrid"] 
])

for(let country of map2.keys()) {
  console.log('country', country);
}

for(let city of map2.values()) {
  console.log('city', city);
}

for(let item of map2) {
  console.log('item', item);
}

// set
let set = new Set();
const one = { name: "Ayako"}
set.add(one)
set.add({ age: 30})
set.add({ name: "Shin"})

console.log('set', set);

set.add(one)

console.log('set', set.size); //same result as before

set.forEach((value, value2, set) => {
  console.log('forEach', value, value2, set);
})

// Rest parameters

function addition(className, ...students) {
  students.map((student) => {
    student.gender === 'female' && console.log('Female student:', student.name);
  })
  console.log(`These are the students for the ${className} class:`, students);
}

addition(
  'Web dev 2',
  { name: "Paolo", gender: "male"},
  { name: "Risa", gender: "female"},
  { name: "Gustavo", gender: "male"},
  { name: "Jun", gender: "male"},
  { name: "Vlad", gender: "male"},
  { name: "Shin", gender: "male"},
);

// Spread Operator
let numArr = [5,7,8,9,5,3]
console.log('spread numArr', ...numArr);
console.log('add extra element with new array', [8, ...numArr]);

let seagull = {
  color: 'white',
  sound: 'noisy',
  floatsOnSea: true
}

console.log('spread obj', {...seagull, beakColor: 'yellow'});
console.log('override value', {...seagull, color: 'black'});