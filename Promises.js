/* Promises vs Callbacks */
/* 
    Pending: initial state,
    Fulfilled: operation completed,
    Rejected: operation rejected.
 */

/* const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}; */

/* const result = wait(4_000);

result.then(() => {
  console.log(result);
});
console.log(result); */

/* const sumPromise = new Promise((resolved, reject) => {
  const numbers = [2, 4, 5, 7, 6, 8];
  const count = numbers.reduce(
    (total, curr) => total + curr,
    0,
  );
  if (count === 33) {
    resolved(`Total count resolved ${count}`);
  } else {
    reject(`Total count failed ${count}`);
  }
}); */

/* sumPromise
  .then((value) => {
    console.log(`This is in the Then ${value}`);
  })
  .catch((value) => {
    console.log(`This is in the Catch ${value}`);
  }); */

// const userLeft = false;
// const userWatchingCatMeme = true;

/* function watchTutorialCallback(callback, reject) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':(',
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme :( Sorry, ',
      message: "It's not interested for user",
    });
  } else {
    callback(
      'Successfuly learned about concept of Promises',
    );
  }
} */

/* watchTutorialCallback(
  (message) => {
    console.log(`Good Job!  ${message}`);
  },
  (error) => {
    console.log(error.name + ' ' + error.message);
  },
); */

/* function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (!userWatchingCatMeme) {
      reject({
        name: 'Unknow:',
        message: "It's not interested for user",
      });
    } else {
      resolve(
        'Successfuly learned about concept of Promises',
      );
    }
  });
} */

/* watchTutorialPromise()
  .then((message) => {
    console.log(`Good Job!  ${message}`);
  })
  .catch((error) => {
    console.log(`${error.name} ${error.message}`);
  })
  .finally(() => {
    console.log(`All settled!`);
  }); */

/* const newUserPromise = new Promise((resove, reject) => {
  if (userLeft) {
    reject({
      name: 'User:',
      message: 'is gone.',
    });
  } else if (userWatchingCatMeme) {
    reject({
      name: 'Unknow user:',
      message: 'not interested.',
    });
  } else {
    resove('User learning Promises');
  }
});
 */
/* newUserPromise
  .then((value) => {
    console.log(`Well done! ${value}`);
  })
  .catch((error) => {
    console.log(`${error.name} ${error.message}`);
  })
  .finally(() => {
    console.log(`Promise that becomes settled!`);
  }); */
