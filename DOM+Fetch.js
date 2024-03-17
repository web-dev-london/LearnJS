class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then(
      (responsse) => responsse.json(),
    );
  }
  put(endpoint, body) {
    return this.#send('put', endpoint, body);
  }
  post(endpoint, body) {
    return this.#send('post', endpoint, body);
  }
  delete(endpoint, body) {
    return this.#send('delete', endpoint, body);
  }

  // Private instans of Method

  #send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method, // this is dynamic now Object shorthand
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
const cities = document.querySelector('#cities-dropdown');
const result = document.querySelector('#result');
const API = new FetchWrapper(
  'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack',
);

cities.addEventListener('change', () => {
  // event.preventDefault();
  API.get(`/${cities.value}.json`).then((data) => {
    const temperature = data.current.temperature;
    result.textContent = `I's ${temperature} degrees celsius.`;
  });
});

//------------------------------------------------------------

const userForm = document.querySelector('#user-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

const URL = new FetchWrapper(
  'https://api.learnjavascript.online/demo',
);

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  URL.put(`/user.json`, {
    firstName: firstName.value,
    lastName: lastName.value,
  }).then((data) => {
    console.log(data);
  });
});
