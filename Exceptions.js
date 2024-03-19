// console.log('Step 1');
// try {
//   nonExistentFunction();
//   console.log('Step 2');
// } catch (error) {
//   console.log('Step 3');
//   console.error(error);
// }
// console.log('Step 4');

/* const sayHello = () => {
  console.log('Hello');
};

console.log('step 1');
try {
  sayHello();
  console.log('step 2');
} catch (error) {
  console.log('step 3');
  console.error(error);
}
console.log('step 4');
 */

const sayHello = (name) => {
  if (!name) {
    throw new Error('name must be provided');
  }
  console.log(`Hello ${name}`);
};
sayHello('John');

console.log('code before');

try {
  sayHello();
} catch (error) {
  console.error('Wrong usage for sayHello');
}
console.log('Code after');

/* 
    If an error occurs in the try { ... } block, JavaScript will stop executing the rest of this block and move to the catch { ... } block.
If no error occurs in the try { ... } block, it will execute in its entirety and the catch { ... } block will be skipped.
You can manually throw exceptions that stop the execution of the code with the following syntax: throw new Error("description here")
You can recover from exceptions by wrapping them with try...catch.
 */
