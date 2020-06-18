import { createRandomPage, createSearchPage, loadCollection } from './view/createElement';

function main() {
  const homeButton = document.querySelectorAll('.home');

  homeButton.forEach((button) => {
    button.addEventListener('click', createRandomPage);
  });

  document.querySelector('.searchpage').addEventListener('click', createSearchPage);
  document.querySelector('.collectionpage').addEventListener('click', loadCollection);

  createRandomPage();
}

export default main;
