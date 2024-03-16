/* 
    Textarea, input, select tags or self-closing tag get (.value);
    textContent return inner text of html element doesn't work on self-closing tag
    innerHTML  return html inside the element avoid using in self-closing tags 
    such as input, select, textarea...
    Use (.value) to access the text written inside an <input> element
 */

// const form = document.querySelector('#name-form');
// const user = document.querySelector('#user-name');
// const userFullName = document.querySelector(
//   '#user-full-name',
// );
// const reset = document.querySelector('#reset');

/* form.addEventListener('submit', (event) => {
  event.preventDefault();
  userFullName.textContent = user.value;
});
reset.addEventListener('click', () => {
  user.value = '';
  userFullName.textContent = '';
});
 */

// ---------------------------------------------------------------------------------

// const fullName = document.querySelector('#full-name');
// const firstName = document.querySelector('#first-name');
// const lastName = document.querySelector('#last-name');
// const btn = document.querySelector('#empty-btn');

/* function getFullName(str) {
  return `${firstName.value} ${lastName.value}`;
}
firstName.addEventListener('keyup', () => {
  fullName.textContent = getFullName();
});

lastName.addEventListener('keyup', () => {
  fullName.textContent = getFullName();
});

btn.addEventListener('click', () => {
  fullName.textContent = '';
  firstName.value = '';
  lastName.value = '';
}); */

// ----------------------------------------------------------------
