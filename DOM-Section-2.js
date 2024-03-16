/* 
  classList is HTML object has methods 
  add('className') => add class
  remove('className') => remove class
  contains('className') => returns boolean
  toggle('className') => built-in method
  replace('hidden', 'show') remove it & replace with new one
 */

/* 
    .getAttribute(key) => gets the value of attribute by its key.
    .removeAttribute(key) => removes an attribute
    .setAttribute(key, value) => writes a new attribute or updates old to new
    .hasAttribute(key) => checks whether an attribute exists or not returns boolean
    .style => property updates css property by JS to camelCase
   */

/* 
   document.body => access to <body></body>
   document.documentElement => access to <html></html
   
   .remove() => removes element from the DOM
   .innerHTML = '' => empties its content that wont be remove it
 */

// ---------------------------------------------------------------

// DATASET => Object

/* 
    Datasets allow you to store data in your HTML (most likely coming from server)
    it returns objects containing all the data- attributes on that element.
    it converts kebab-case to camelCase
    DATA values always saved as a string.
 */

/* <form
  id='payment-form'
  data-currency='EUR'
  data-user-id='2'>
  ...
</form>;

const form = document.querySelector('#payment-form');
console.log(form.dataset); // {userId: "2", currency: "EUR"}
const currency = form.dataset.currency; // "EUR"
 */
