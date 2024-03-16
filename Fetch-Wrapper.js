/* 
  It automatically calls JSON.stringify().
  It automatically calls response => response.json()
  It automatically sets the default Content-Type header.
 */

/* const API = new FetchWrapper(
  'https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app',
);
 */

/* API.get('/notifications/new.json').then((data) => {
  console.log(data);
});
 */

/* API.get('/chapters/all.json').then((data) => {
  console.log(data);
}); */

/* class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    return fetch(this.baseURL + endpoint).then(
      (response) => response.json(),
    );
  }
} */

// ----------------------------------------------------------------------------

/* 
    PUT -> is sending request to API (baseURL followed by endpoint)
        sending a custom header "Content-Type": "application/json"
        converting the body argument to a JSON string with(JSON.stringify())
        & sending it as the body of the fetch request.
        it's converting the server response to json (response => response.json())
*/

/* const API = new FetchWrapper(
  'https://api.learnjavascript.online',
);

API.put('/demo/grades.json', {
  grade: 18,
}).then((data) => {
  console.log(data);
});

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  put(endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
} */

//  ----------------------------------------------------------------

/* This pattern is called 
    Response interceptor */

/* 
    Post & Delete
 */

/* class FetchWrapper {
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
 */
