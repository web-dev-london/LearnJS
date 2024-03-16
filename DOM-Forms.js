/* 
    A <form> element groups several inputs together
     and separates multiple forms on a web page.
  The submit event is when the user clicks on the submit button 
  or presses the enter key inside the form.
  The submit event fires on the <form> element (not on the button).
  By default, the browser will send the data to the current page. 
  To avoid that, you need to prevent the default action with event.preventDefault().
  Make sure to access the value property inside the submit event. 
  Otherwise, it'll be an empty string (or the value that is pre-filled inside the textbox)

  Most likeyly form uses submit event & that's why to prevent reload the page
    event.preventDefault() 
 */

// const form = document.querySelector('#user-form');

/* form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#user-email');
  const password = document.querySelector(
    '#user-password',
  );
  getValue(email.value, password.value);
});

function getValue(email, password) {
  console.log({ email, password });
} */

// -------------------------------------------------

// const button = document.querySelector('#button');

/* button.addEventListener(
  'click',
  (event) => {
    console.log(button.textContent);
  },
  {
    once: true,
  },
);
 */

/* const handleClick = (event) => {
  console.log('Will remove after 2sec');
  console.log(event.currentTarget.textContent);
};

button.addEventListener('click', handleClick);

setTimeout(function () {
  button.removeEventListener('click', handleClick);
}, 2000);
 */
