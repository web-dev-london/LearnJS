/* 
    Logical way to fetch resources asynchronously across the network.

    JavaScript interface for accessing and manipulating parts of 
    the protocol, such as requests and responses.

    The fetch API is used to send and/or receive data 
    from a service (an API) without reloading the page.

    fetch API always returns a  Promise
 */

const url = fetch(
  'http://worldtimeapi.org/api/timezone/America/New_York',
);

// url
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/* url
  .then((response) => {
    if (!response.ok) {
      throw new Error('API issues');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {  Always handle rejections!
    console.error(error); 
  }); */

/* url
  .then((response) => response.json())
  .then((data) => {
    console.log(data.datetime);
  })
  .catch((error) => { Always handle rejections!
    console.error(error);
  }); */

/* const init = () => {
  console.log('A');
  fetch(
    'http://worldtimeapi.org/api/timezone/America/New_York',
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('B');
      console.log(data.datetime);
    });
  console.log('C');
};
init(); */

// const url1 =
//   'http://worldtimeapi.org/api/timezone/America/New_York';

// async function getData() {
//   const response = await fetch(url1);
//   const data = await response.json();
//   console.log(data);
// }
// getData();
