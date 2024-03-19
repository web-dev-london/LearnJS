const getNotificationsCount1 = () => {
  return new Promise((resolve) => {
    fetch(
      'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json',
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // visualize response
        resolve(data.count);
      });
  });
};

// Sample usage
getNotificationsCount1().then((data) => {
  console.log(data); // 3
});

const getNotificationsCount = async () => {
  const response = await fetch(
    'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json',
  );
  const data = await response.json();
  console.log(data); // visualize response
  return data.count;
};

// Sample usage
getNotificationsCount().then((data) => {
  console.log(data); // 3
});

/* 
    Chapter Recap
The await keyword only works inside async functions.
The await keyword will "pause" the execution of the current function until the promise has been resolved.
await will automatically call .then() on the promise and give you its result.
You can only await a promise (or an object that has the .then() method).
async/await makes it easier to read code line by line rather than going through callbacks.
The value that you return from the async function will be wrapped in a promise.
Top Level Await (using await outside of a function) is supported on all major browsers' Dev Tools.
Top Level Await in <script type="module"></script> is currently being implemented by browsers.
If you have await inside a function, the function has to be async. No exceptions.
Though not common, there is a downside of using async/await if you're not careful in remembering that the await keyword is pausing the execution of that function until the promise has been resolved (or rejected).
 */
