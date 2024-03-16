/* 
JSON stands for JavaScript Object Notation. 
It's a format for storing and sending data.
 */

// JSON.parse(string) converts JSON string into JSON Object

const stringToObj =
  '{"firstName":"Sam", "lastName":"Green","age":32}';
const personObject = JSON.parse(stringToObj);

console.log(personObject.firstName);
console.log(personObject.lastName);

// JSON.stringify(object) converts JSON object into JSON string

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 35,
};
const objectToStr = JSON.stringify(person);
console.log(objectToStr);
