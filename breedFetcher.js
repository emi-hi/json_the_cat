const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search';
const fetchBreedDescription = function(breed, callback) {
  const query = url + '?q=' + breed;
  request(query, (error, response, body) => {
    if (error) {
      callback(error, `\n\n::::there was an error:::: \n \n ${error}`);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(error, "can't find that breed, sorry!");
      } else {
        callback(error, data[0].description);
      }
    }
  });
};
module.exports = { fetchBreedDescription };