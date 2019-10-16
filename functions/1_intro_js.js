
//standard javascript
var name = "Ayako"
console.log("1:name", name);

name = "Ali"
console.log("1:name", name);


//ES6
let animal = "cat"
console.log("1:animal", animal);

animal = "dog"
console.log("1:animal", animal);

const age = 31
console.log("1:age", age);
//can't do this
// age = 40;


const count = "1"
const updatedCount = parseInt(count);
console.log("2:number", updatedCount + 1)

// const str = toString(updatedCount).substring;
// console.log("2:string", str);

console.log(`3:template literals My age is ${age}`);

const students = ["Vlad", "Isao", "Shin", "Cedric", "Risa", "Nobu", "Tatsuya", "Paulo", `Newaj(Ramzi?)`, "Ronan", "Gustavo", 'Gustavo', "Jun", "James(Ye Si?)", "Marcus"]
const [firstStudent, secondStudent] = students;
console.log("4:destructuring", firstStudent, secondStudent);

const ayakoObj = {
  name: "Ayako Sayama",
  age: 31,
  profession: "Frontend developer",
  pets: ["cat", "dog"]
}

const jobTitle = "profession"

console.log("5:dot notation", ayakoObj.profession)
console.log("5:square brackets notation", ayakoObj['profession']);
console.log("5:square brackets notation with variable", ayakoObj[jobTitle])

const keyName = "webDev";

let classes = {
  [keyName]: "This is webdev"
}

console.log(classes[keyName]);
console.log(classes.webDev)

const { pets } = ayakoObj;
console.log("6:pets", pets);
console.log('ayakoObj', ayakoObj)


const number1 = 3;
const number2 = 5;

const result = number1 === number2 ? "number 1 is same as number 2" : "number 1 is not number 2";
console.log("7:conditional", result);