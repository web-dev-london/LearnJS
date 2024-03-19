/* Every time you create a function in JavaScript, you create a closure.

A closure is where an inner function has access to the outer function's variables, even after the outer function has completed.
 */

const min_age = 18;

// The function canVote is able to access
// variables in the outer scope.
const canVote = (age) => {
  if (age >= min_age) return true;
};
canVote(14);

// Capturing the scope of a function

const curriedSum = (a) => {
  return function (b) {
    return a + b;
  };
};

const sumFive = curriedSum(8);
sumFive(3);
sumFive(5);

/* A closure refers to the situation in which an inner function retains access to the variables of its outer function.
It may seem like closures is something you decide to use but in fact, closures is what you get (automatically) every time you define a function.
 */

/* global scope */
const maxAge = 18;

const init = () => {
  /* outer function */
  const button = document.querySelector('button');
  const age = Number.parseInt(
    document.querySelector('#age').value,
    10,
  );

  button.addEventListener('click', () => {
    /* inner function */
    // age accessible from outer function's scope
    // maxAge is accessible from the global scope
    // button is accessible from outer function's scope
    if (age >= maxAge) {
      button.classList.add('success');
    } else {
      button.classList.remove('success');
    }
  });
};

/* In conclusion, a closure is the combination of a function bundled together with its surrounding variables.
 */

/* Recap
From an inner function, we are able to access variables from the outer function.
A closure is the combination of a function bundled together with its surrounding variables.
A closure has three scope chains:
Variables in their own scope (variables defined between the curly braces of a function).
Variables defined in the outer function's scope.
Variables defined in the global scope.
 */

/* // start with a variable (state) saying that the confetti is NOT shown yet
// this variable is defined in the global scope
let isConfettiShown = false;

const runBtn = document.querySelector("#run-btn");
runBtn.addEventListener("click", () => {
    if (isConfettiShown) {
        return false;
    }
    showConfetti(); //call a fictional function that shows the confetti
    isConfettiShown = true; // set the state variable as true
}); */

/* Recap
A common example of closures is to define a variable outside a function that can then be used and changed inside the inner function.
 */

/* const runBtn = document.querySelector("#run-btn");
runBtn.addEventListener("click", () => {
    let isConfettiShown = false; // we WON'T get the expected behavior :(
    if (isConfettiShown) {
        return false
    }
    showConfetti(); //call a fictional function that shows the confetti
    isConfettiShown = true; // set the state variable as true
}); 
*/
