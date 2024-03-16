const userName = document.querySelector('#user-name');

userName.addEventListener('focus', () => {
  console.log('User focused inside the name');
});

userName.addEventListener('blur', () => {
  console.log('User removed focus from the name');
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is ready');
});

window.addEventListener('scroll', () => {
  console.log('Page scrolled');
});

const country = document.querySelector('#countries');

country.addEventListener('change', () => {
  console.log(country.value);
});

// document.addEventListener('keydown', (event) => {
//   console.log(event.key);
// });

const textType = document.querySelector('#user-text');

textType.addEventListener('keyup', (event) => {
  console.log(event.key);
});

/* 
  focus is triggered when the user enters focus (the cursor) in a textbox.
blur is triggered when the user removes focus (the cursor) from a textbox.
DOMContentLoaded is fired when the browser has finished loading & constructing the entire HTML on your page.
scroll is triggered every time the user scrolls.
change is used to know when a <select> has a new option chosen.
keydown and keyup are used to know when the user has typed a character on the keyboard.
*/

/* 
  You can remove an event listener using the element.removeEventListener(eventType, callback) method.
If you need to add an event listener that only runs once, there's an easier way instead of adding an event listener and then removing it. You can add an event listener and specify
 "once: true" =>  in its options.
Most events bubble up the DOM tree. If that's unwanted, you can stop it with event.stopPropagation()
"focus" => is triggered when the user enters focus (the cursor) in a textbox.
"blur" =>  is triggered when the user removes focus (the cursor) from a textbox.
"DOMContentLoaded" => is fired when the browser has finished loading & constructing the entire HTML on your page.
"scroll" => is triggered every time the user scrolls.
"change" => is used to know when a <select> has a new option chosen.
"keydown" and "keyup" are used to know when the user has typed a character on the keyboard.
 */
