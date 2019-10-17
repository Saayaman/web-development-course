//-------1 MAP
const students = ['Gustavo', 'Ronan', 'Jun', 'James'];

//parameter name can be anything
students.map((student) => console.log(`Hi!, ${student}`));

//you don't have to put parenthesis if there is only 1 parameter.
const greetings = students.map(student => `Hi!, ${student}`);
console.log('greetings!', greetings);


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

//must return a boolean to filter
const filteredResult = students.filter(student => student.length < 4)
console.log('filteredResult', filteredResult);
console.log('filteredResult2', students.filter((student, index) => student.length < 4))

// ------ 3. SPLICE
let sweets = ['chocolate', 'cake', 'bubble tea', 'mousse', 'cheese cake'];

sweets.splice(3, 2)
console.log('sweets', sweets);

sweets.splice(0, 1, "pudding")
console.log('sweets', sweets);

//putting it in a variable returns deleted array
const deletedElements = sweets.splice(0,2);
console.log('sweets', deletedElements);