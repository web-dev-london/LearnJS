/* 
    Lexical Scope
 */

// class App {
//   constructor() {
//     this.navbar = document.querySelector('#navbar');
//     this.initEvents();
//   }

//   initEvents() {
//     this.navbar.addEventListener('click', function () {
//       console.log(this.navbar); // undefined
//       this.navbar.remove();
//     });
//   }
// }

// class App {
//   constructor() {
//     this.navbar = document.querySelector('#navbar');
//     this.initEvents();
//   }

//   initEvents() {
//     this.navbar.addEventListener(
//       'click',
//       function () {
//         console.log(this.navbar); // returns the navbar because `this` is bound to the correct value
//         this.navbar.remove(); // works
//       }.bind(this),
//     ); //bind the value of this from outside the function into the inner function
//   }
// }

/* class App {
  constructor() {
    this.navbar = document.querySelector('#navbar');
    this.initEvents();
  }

  initEvents() {
    this.navbar.addEventListener('click', () => {
      console.log(this.navbar);
      this.navbar.remove();
    });
  }
}
 */

// Arrow functions have lexical scope. The value of this inside of them is the same as the outer function.
