/* 
  The element.addEventListener(eventType, callback) 
  method allows you to wait for an event (let's say click for now)
   to happen on an element.
 */

/* 
      If you're asked to disable a button on click, ask yourself: 
      What is the code that I need to write to disable the button? 
      The answer is button.setAttribute("disabled", "disabled"). 
      You can then put that code inside the event callback of
       addEventListener().
    */

// const btn = document.querySelector('#my-button');

/* btn.addEventListener('click', (event) => {
  console.log('My button clicked!');
  console.log(event.currentTarget);
}); */

// const buttons = Array.from(
//   document.querySelectorAll('button'),
// );

/* buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.currentTarget.textContent);
  });
});
 */

/* const handleButtonClick = (event) => {
  console.log(event.currentTarget.textContent);
};

buttons.forEach(function (item) {
  item.addEventListener('click', handleButtonClick);
});
 */

/* 
    Remember to iterate over the results of document.querySelectorAll
    before calling addEventListener.
    event.currentTarget works in all scenarios 
    which is why we prefer using it.
 */
