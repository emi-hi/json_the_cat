const request = require('request');
const userArgs = process.argv.splice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search';
const breed = userArgs[0];
const query = url + '?q=' + breed;
request(query, (error, response, body) => {
  if (error) {
    console.log(`\n\n::::there was an error:::: \n \n ${error}`);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("can't find that breed, sorry!");
    } else {
      console.log(data[0].description);
    }
  }
});