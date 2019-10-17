

const classObj = [
  {
    name: "Ayako",
    type: "teacher",
    age: 31,
  },
  {
    name: "Risa",
    type: "student",
    age: 25,
  },
  {
    name: "Gustavo",
    type: "student",
    age: 20
  },
  null
]

let isYoung = classObj[2].age < 30;

console.table(classObj);
console.log('classObj', classObj[3]);

// null and undefined are "false" when using as a boolean
console.log('classObj2', classObj[3] ? "This exists" : "This does not exist");
console.log('classObj3', !isYoung ?  "The person is not that young" : "The person is young");
console.log('classObj4', isYoung && "The person is young");
console.log('classObj5', !!classObj[0].age);

console.log('classObj6', classObj[0].age ? "age exists" : "age does not exist")

// function sayHello(name) {
//   return `Hello, ${name}`
// }

//ES6
// const sayHello = (name) => {
//   return `Hello, ${name}`
// }

const sayHello = () => `Hello, Ayako`
console.log('sayHello', sayHello());

let animalArr = ['giraffe', 'cat'];

animalArr.push('lion')
console.log('animalArr', animalArr);
console.log(`animalArr ${animalArr}`);

animalArr.pop()
console.log('animalArr', animalArr);

animalArr.shift()
animalArr.unshift('alpaca')
console.log('animalArr', animalArr);


let deviceArr = ["iPhone", "android", "iPad", "pixel"]
console.log('deviceArrLength', deviceArr.length)

deviceArr.length = 2;
console.log('deviceArr', deviceArr);
deviceArr.length = 5;
console.log('deviceArr', deviceArr);


let houseType = ["bachelor", "studio", "condo", "apartment", "house", "basement"]

// for(let i = 0; i < houseType.length; i++) {
//   console.log(`housetype no.${i}. ${houseType[i]}`);
// }

//Array loop: gives you value
for(let type of houseType) {
  console.log(`houseType ${type}`)
}

//Array loop: gives you index
for(let typeIndex in houseType) {
  console.log(`houseType ${typeIndex}`);
}


let weather = {
  temperature: '30celcius',
  city: "Vancouver",
  date: "Nov 16th"
}


//Object loop for...in: gives you the key
for(let key in weather) {
  console.log('key', key, weather[key]);
}

console.log('object values', Object.entries(weather));
for (let [key, value] of Object.entries(weather)) {
  console.log('value', value);
}


