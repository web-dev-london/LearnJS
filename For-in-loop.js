const person = {
  id: 1,
  name: 'John',
};

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(element);
  }
}

/* Remember to use for...of for array iterations (or .forEach()).
We'd just like to note that for...in does work for arrays but it is NOT recommended.

The reason why has to do with a couple of edge cases, you will most likely rarely encounter them but to be safe, follow our recommendation and use for...in for objects and for...of for arrays.
 */

// Summary (so far)
// Use forEach when iterating over arrays.
// Use for loop when counting up or down.
// Use for loop when counting up or down irregularly (skipping some items).
// for...of can be used to iterate over arrays.
// Use for...in when iterating over objects.
