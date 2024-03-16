//  Traversing the DOM.
/* 
  .parentElement => returns the parent element.
  .closest("CSS-selector") => returns the closest 
    ancestor that matches the "CSS-selector"
 */

// Insert adjacent HTML

/* 
  .insertAdjacentHTML method.
  element.insertAdjacentHTML(position, htmlString) will prepend/append the htmlString depending on the position.  
  A position of "beforeend" will append (add at the end).
  A position of "afterbegin" will prepend (add at the beginning).
 */

// Array to DOM

/* const apps = ['Calculator', 'Phone', 'Messages'];
const list = document.querySelector('#apps-list');

apps.forEach((app) => {
  list.insertAdjacentHTML('beforeend', `<li>${app}</li>`);
});
 */

// Creating elements imperatively

/* 
  For example, instead of writing the htmlString <p class="text-center">Hello World</p>, you can construct it with the document
  .createElement() method:
 */

/* const paragraph = document.createElement('p');
paragraph.classList.add('text-content');
paragraph.textContent = 'Hello World';
console.log(paragraph.textContent);
 */
