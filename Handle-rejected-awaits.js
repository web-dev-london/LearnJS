// const getUnreadCount = async () => {
//   const response = await fetch(
//     'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json',
//   );
//   const data = response.json();
//   return data.count;
// };

// const init  = async () => {
//   const result = await getUnreadCount();
//   console.log(result);
// }

/* const init = async () => {
  try {
    const result = await getUnreadCount();
    console.log(result);
  } catch (error) {
    console.error(error);
    // handle error by showing that.....
  }
}; */

/* .catch for promises VS. try...catch for async/await */

/* const getUnreadCount = async () => {
  try {
    const response = await fetch(
      'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json',
    );
    const data = await response.json();
    return data.count;
  } catch (error) {
    // ❌ this will give you an unexpected result
    return 'An error has occurred';
  }
}; */

const getUnreadCount = async () => {
  try {
    const response = await fetch(
      'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json',
    );
    const data = await response.json();
    return data.count;
  } catch (error) {
    // ✅ this throws an error (thus, works as expected)
    throw 'An error has occurred';
  }
};

/* 
    Recap
If the promise being awaited moves from pending to rejected, the error message will be thrown as an error (using the throw operator).
You can recover from such an error by wrapping the await call with a try...catch.
return inside an async function will resolve the promise successfully (even if the return was inside a catch { ... } block).
 */

/* Chapter Recap
If the promise being awaited moves from pending to rejected, the error message will be thrown as an error (using the throw operator).
You can recover from such an error by wrapping the await call with a try...catch.
return inside an async function will resolve the promise successfully (even if the return was inside a catch { ... } block).
 */
