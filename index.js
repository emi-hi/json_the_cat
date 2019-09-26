const { fetchBreedDescription } = require('./breedFetcher');
const inputBreed = process.argv[2];

fetchBreedDescription(inputBreed, (error, description) => {
  if (error) {
    console.log(`error fetch details: \n ${error}`);
  } else {
    console.log(description);
  }
});
