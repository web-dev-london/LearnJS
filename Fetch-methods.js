/* 
  When you send a network request with the fetch method,
   you are performing a fetch with a method GET by default
 */
/* 
      Get: -> Read data  defaults methods & not allowed to have body!
      Post: -> Create data
      Put: -> update data
      Delete: -> delete data
 */

// const url = fetch(
//   'http://worldtimeapi.org/api/timezone/America/New_York',
//   {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       tweet: 'Your tweet here...',
//     }),
//   },
// );

// url
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
