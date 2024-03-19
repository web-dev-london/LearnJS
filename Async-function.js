const getUsers1 = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

// Sample usage
getUsers1();

const getUsers = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  );
  const data = await response.json();
  console.log(data);
};

// Sample usage
getUsers();

/* 
    Recap
The async/await keywords are syntactic sugar on top of promises. Their goal is to make your code easier to read (and write).
Learning promises is a pre-requisite to understanding async/await.
The async keyword wraps the return value of the function with a promise. It's very important to know that when a function is async it means that it will always return a promise.
 */

class User {
  async isAdmin(type) {
    return type === 'admin';
  }
}

// Sample usage
const user = new User();
user.isAdmin('admin').then((value) => {
  console.log(value); // true
});

/* 
    Recap
const X = async () => { ... } is an async arrow function.
Class methods can be made async by prefixing the method name with the keyword async.
 */
