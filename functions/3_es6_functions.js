//-------1 MAP
const students = ['Gustavo', 'Ronan', 'Jun', 'James'];

//parameter name can be anything
students.map((student) => console.log(`Hi!, ${student}`));

students.map(function(student){
  console.log(`Hi!, ${student}`) 
});


//you don't have to put parenthesis if there is only 1 parameter.

const greetings = students.map(student => `Hi!, ${student}`);

// const greetings = students.map(student => {
//   return `Hi!, ${student}`
// });


const greetingsReturn = students.map((student, index) => {
  //....more calculations
  return `Hi!, ${student} No. ${index}`
})

console.log('greetingsReturn', greetingsReturn);


const getStudentGreetings = (student) => `Hi!, ${student}`
const greetingsReturn2 = students.map(
  (student) => getStudentGreetings(student)
)
//shorthand way of passing params inside a function　↓
const greetingsReturn3 = students.map(getStudentGreetings)

console.log('greetingsReturn2', greetingsReturn3);


//-------2. FILTER

// must return a boolean to filter
const filteredResult = students.filter(student => student.length < 4)
console.log('filteredResult', filteredResult);

console.log('filteredResult2', students.filter(
  (student, index) => student.length < 4)
)

// ------ 3. SPLICE
let sweets = ['chocolate', 'cake', 'bubble tea', 'mousse', 'cheese cake'];

// 1. (a,b) a= starting position b =number of elements
sweets.splice(3, 2)
console.log('sweets', sweets);

sweets.splice(0, 1, "pudding")
console.log('sweets', sweets);

//putting it in a variable returns deleted array
const deletedElements = sweets.splice(0,2);
console.log('sweets', deletedElements);

// ------ 4. SLICE
let animals = ["lion", "mink", "parrots", "cats", "racoon"]

// (a, b) a = starting position, b = ending position
const slicedAnimals = animals.slice(2, 4)
console.log('Animals:', animals, "slicedAnimals:", slicedAnimals);

// ------ 5. forEach (new way of doing loop)
//gives us no result
animals.forEach((animal) => console.log(`I love ${animal}`))

// ----- 6. reduce
let numbers = [5,2,-10,111,9,16]
let totalNum = numbers.reduce((total, currentNum) => total + currentNum)
console.log('total', totalNum);

// ---- 7. sort numbers
numbers.sort(function(number1, number2){
  // return number1 - number2
  console.log('numbers', number1, number2);
  return number2 - number1
})

console.log(numbers);


// 8. find
let cars = ['mitsubishi', 'toyota', 'ford', 'benz', 'ferrari'];

let found = cars.find(car => car === 'ford')
console.log('found', found);

// 9. includes (returns a boolean)
console.log('is threre a volkswagen?', cars.includes('volkswagen'));
console.log('is threre a toyota?', cars.includes('toyota'));

// 10. some (returns a boolean)
let isFound = cars.some(car => car === 'ford')
console.log('isFound', true);

// 11. indexOf (returns a index)
let indexOfFerrari = cars.indexOf('ferrari');
let indexOfTesla = cars.indexOf('tesla') //-1

console.log('indexofferrari', indexOfFerrari);
console.log('indexOfTesla', indexOfTesla);

// 12. join
const jointText = cars.join(', ');
console.log('joined text', jointText);

// 13. split
console.log('split', jointText.split(', '));

// 14. Classes

class Student {
  static studentClassName = 'React'

  constructor(name, age) {
    //global variable inside a class
    this.name = name;
    this.age = age;
    //private variable: cannot use it outisde constructor
    const studentName = name;
  }

  greetStudent() {
    return `Hi, ${this.name}`
  }
}


const firstStudent = new Student('Ayako', 31);
//Getter
console.log('age', firstStudent.age) //returns 31

//Setter
firstStudent.age = 40
console.log('age', firstStudent.age); //returns 40

console.log('greetstudent', firstStudent.greetStudent(), firstStudent.age);
console.log('static', Student.studentClassName)


let obj = {
  name: "Ayako",
  age: 31,
  occupation: "teacher"
}

let newObj = {
  ...obj, name: "Derrick", age: 30
}

console.log("newObj", newObj);
//result: { name: "Derrick", age: 30, occupation: "teacher" }