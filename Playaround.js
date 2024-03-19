/* let greet_one = 'Hello';
let greet_two = 'World!';
console.log('greet_one: ', greet_one);
// for (let i = 0; i < 1000000090; i++) {}
setTimeout(function () {
  console.log('Asynchronous');
}, 2000);
console.log('greet_two: ', greet_two); */

/* const fetchAPI = async function () {
  const res = await fetch(
    'https://cat-fact.herokuapp.com/facts',
  );
  const data = await res.json();
  console.log(data);
};
fetchAPI();
console.log('FIRST');
 */

/* const fetchAPI = async function () {
  try {
    const res = await fetch(
      'https://cat-fact.herokuapp.com/facts',
    );
    if (!res.ok) {
      throw new Error('Custom Error');
    }
    const data = await res.json();
    console.log(data);
    return 'Done with fetchAPI';
  } catch (err) {
    console.log(err);
  }
}; */

// console.log(fetchAPI());

/* fetchAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('FIRST'); */

// ----------------------------------------------

const fetchAPI = async function (
  country1,
  country2,
  country3,
) {
  try {
    const res1 = await fetch(
      `https://restcountries.com/v3.1/name/${country1}`,
    );
    const res2 = await fetch(
      `https://restcountries.com/v3.1/name/${country2}`,
    );
    const res3 = await fetch(
      `https://restcountries.com/v3.1/name/${country3}`,
    );

    const data1 = await res1.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    console.log(data1[0].capital[0]);
    console.log(data2[0].capital[0]);
    console.log(data3[0].capital[0]);
    return 'Done with fetchAPI';
  } catch (err) {
    console.log(err);
    throw new Error('Custom Error');
  }
};

fetchAPI('canada', 'germany', 'russia');
