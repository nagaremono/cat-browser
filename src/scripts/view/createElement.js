/* eslint-disable no-unused-vars */
import '../component/cat-gallery';
import '../component/breed-info';
import '../component/breed-search-form';

import { getCats, getCollection } from '../data/retrieveData';

async function searchBreed() {
  const main = document.querySelector('main');

  const breedPage = document.querySelector('.breedpage');

  const searchValues = document.querySelector('breed-search').value;

  const breedInfo = document.createElement('breed-info');

  const catGallery = document.createElement('cat-gallery');
  catGallery.classList.add('searchgallery');

  await getCats(searchValues.imageCount, searchValues.breed)
    .then((cats) => {
      catGallery.cats = cats;
      breedInfo.catInfo = cats.breedInfo;
    });

  while (breedPage.childNodes.length > 1) {
    breedPage.removeChild(breedPage.lastChild);
  }

  breedPage.appendChild(breedInfo);
  breedPage.appendChild(catGallery);
  main.appendChild(breedPage);
}

async function createRandomPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  main.innerHTML = `
    <h1>Browse some random cats!</h1>
  `;
  const catGallery = document.createElement('cat-gallery');

  await getCats(9).then((catInfo) => {
    catGallery.cats = catInfo;
  });

  main.appendChild(catGallery);
}

function createSearchPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.innerHTML = `
    <h1>Browse Cats by Their Breed!</h1>
  `;

  const breedPage = document.createElement('div');
  breedPage.classList.add('breedpage');

  const searchForm = document.createElement('breed-search');
  searchForm.clickEvent = searchBreed;

  breedPage.appendChild(searchForm);

  main.appendChild(breedPage);
}

function loadCollection() {
  const localCats = getCollection();

  const main = document.querySelector('main');
  main.innerHTML = '';
  main.innerHTML = `
  <h1>Your Collected Cats!</h1>
  `;

  const collections = document.createElement('div');
  collections.classList.add('collections');

  localCats.forEach((cat) => {
    const catImage = document.createElement('cat-image');
    catImage.catInfo = {
      name: cat.catName,
      url: cat.catUrl,
      isCollected: true,
    };

    collections.appendChild(catImage);
  });

  main.appendChild(collections);
}

export {
  createSearchPage, loadCollection, createRandomPage,
};
