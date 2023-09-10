const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

const CATAPI_KEY =
  'live_TJ5iQhaLjIBCzANQVZ8PyHTTPAk1n6dEFyiV6O7A3GObRPidDwTtSAq3jwIXmDVw';

const fetchBreeds = () => {
  return new Promise((resolve, reject) => {
    fetch(`${url1}?api_key=${CATAPI_KEY}`).then(response => {
      if (!response.ok) {
        resolve(response.status);
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });
};

const fetchCatByBreed = breedId => {
  return new Promise((resolve, reject) => {
    fetch(`${url2}/${breedId}?api_key=${CATAPI_KEY}`).then(response => {
      if (!response.ok) {
        resolve(response.status);
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });
};

export { fetchBreeds, fetchCatByBreed };
