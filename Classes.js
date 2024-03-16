/* JS Classes: Template for Creating Object.
  Capturing with Constructor,
   instanses, instans:variable = this,
    instans:methods, classic inheritance: extends with super()
 */

/* 
    Defining of Classes:
    Class Declaration; class Circle {}
    Class Expression; const Circle = class {} it is anonymous
                      const Circle = class Circle1 {} named class expression
 */

/* 
    Class has three aspects:
    Kind: Getter, setter, method, or field.
    Location: Static or instance.
    Visibility: Public or private.
 */

/* class User {
  constructor(firstName, lastName, prefix, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.prefix = prefix;
    this.age = age;
  }
  getFullName() {
    return `${this.prefix}. ${this.firstName} ${this.lastName}`;
  }
  canVote() {
    return this.age >= 18;
  }
}
const user1 = new User('Sam', 'Doe', 'Mrs', 20);
console.log(user1);
const user2 = new User('Alex', 'Green', 'Mr', 17);
console.log(user2);
console.log(user1.canVote());
console.log(user2.canVote()); */

/* class UserGreeting {
  constructor(firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firsName} ${this.lastName}`;
  }
  getGreeting() {
    const fullName = this.getFullName();
    return `Hello ${fullName}`;
  }
}
const greeting1 = new UserGreeting('John', 'Smith');
console.log(greeting1.getGreeting()); */

/* Using _ in a class */

/* class UserAge {
  get age() {
    console.log('age getter');
    return this._age;
  }
  set age(value) {
    console.log('age setter');
    this._age = Number.parseInt(value, 10);
  }
}
const age1 = new UserAge();
age1.age = '18';
console.log(age1._age); */

/* Static Method of Class */

/* class Config {
  static getYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
console.log(Config.getYear()); */

/* class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getInitials() {
    return this.firstName[0] + this.lastName[0];
  }
} */

/* 
   Classical Inheritance
 */

/* class Manager extends Employee {
  getFullName() {
    return `${this.firstName} ${this.lastName} (manager)`;
  }
  sendPerformaceReview() {
    return `Performance review`;
  }
}
const manager = new Manager('John', 'Smith');
manager.sendPerformaceReview();
manager.getFullName();
manager.getInitials(); */

// const employee1 = new Employee('Sam', 'Doe');
// employee1.getInitials();

/* class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }
  getInitials() {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
} */

/* class Manager extends Employee {
  constructor(firstName, lastName, department) {
    super(firstName, lastName);
    this.department = department;
  }
  sendPerformanceReview() {
    return `Send performance review for ${this.department}`;
  }
  getInitials() {
    return `${super.getInitials()} (manager)`;
  }
} */

/* const currentManager1 = new Manager(
  'John',
  'Smith',
  'Marketing',
);
console.log(currentManager1.department);
console.log(currentManager1.getInitials()); */

/* function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
}; */

/* Prototypal inheritance */

/* class Gorilla {
  eat() {
    console.log('Gorilla eats banana');
  }
}
class Banana {}
class GorillaBanana {}
GorillaBanana.prototype.eat = Gorilla.prototype.eat; */

/* Prototypal chaining */

/* class Welcome {
  sayHello() {
    return `Hello World!`;
  }
}
const welcome = new Welcome();

Object.getPrototypeOf(welcome);
Object.getPrototypeOf(Object.getPrototypeOf(welcome)); */

/* Public class fields */

/* class BookSale {
  amount = 1_000;
  currency = 'usd';
  isStudent = false;

  applyStudentDiscount() {
    this.isStudent = true;
    this.amount = 800;
    return this;
  }

  setCurrency() {
    this.currency = this.currency;
    return this;
  }

  applyPercentageDiscount(percent) {
    this.amount =
      this.amount - (this.amount * percent) / 100;
    return this;
  }
} */

/* const bookSale1 = new BookSale();
bookSale1
  .applyStudentDiscount()
  .setCurrency('eur')
  .applyPercentageDiscount(10);
 */
/* Private class fields! */

/* class Applicant {
  #votingAge;
  constructor() {
    this.#votingAge = 18;
  }
} */
