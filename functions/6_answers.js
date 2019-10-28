
async function callGetQuote() {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch(error) {
    console.log(error);
  }
}

const age = 30;
let older = age < 20 ? false : true

const greeting = (firstname, lastname) => {
  return `Hi, ${firstname} ${lastname}`
} 

const greeting = (firstname, lastname) => `Hi, ${firstname} ${lastname}`


Array.map((student) => getStudentGreetings(student))
Array.map(getStudentGreetings)


const arr = []

arr.map(() => {
  //here
})

const re = arr.map(() => {
  //do something
})

//re is array

const index = arr.indexOf('Ronan')
//this will return index

firstStudent.age = 40;


// rest params / spread operator
const newArr = [...arr, arr2]



const json = {
  "key1": "value1",
  "key2": "value2"
}


const obj = { a: 1, b: 2 }

const endpoint = `/endpoint?a=1&b=2`
const endpoint2 = `/endpoint${JSON.stringify({ a: 1, b: 2 })}`