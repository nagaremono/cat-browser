/* eslint-disable no-unused-vars */
const baseUrl = 'https://api.thecatapi.com/v1';
const apiKey = '42529c41-bfa2-4453-9ae7-3dc904f04ae5';

async function getCats(number, breed) {
  let fetchUrl = `${baseUrl}/images/search?limit=${number}&size=med`;

  if (breed) {
    fetchUrl = `${baseUrl}/images/search?breed_id=${breed}&limit=${number}&size=med`;
  }
  const imageUrls = [];
  let breedInfo = {};

  await fetch(fetchUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  }).then((response) => response.json())
    .then((catArray) => {
      catArray.forEach((cat) => {
        imageUrls.push(cat.url);
        if (breed) {
          [breedInfo] = cat.breeds;
        }
      });
    });

  return { imageUrls, breedInfo };
}

function addToCollection(event) {
  const catImage = event.target.parentNode;

  const catUrl = catImage.querySelector('img').getAttribute('src');
  const catName = catImage.querySelector('img').getAttribute('alt');

  const collected = [{ catUrl, catName }];

  if (!localStorage.getItem('cats')) {
    localStorage.setItem('cats', JSON.stringify(collected));
  } else {
    const localCat = JSON.parse(localStorage.getItem('cats'));

    localCat.push(collected[0]);

    localStorage.setItem('cats', JSON.stringify(localCat));
  }

  catImage.querySelector('button').setAttribute('disabled', true);
}

function getCollection() {
  const localCats = JSON.parse(localStorage.getItem('cats'));

  return localCats;
}

export {
  getCats, addToCollection, getCollection,
};
