/* eslint-disable no-underscore-dangle */
import './cat-image';
import { addToCollection } from '../data/retrieveData';

class catGallery extends HTMLElement {
  set cats(cats) {
    this._cats = cats;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._cats.imageUrls.forEach((url) => {
      const catImageElement = document.createElement('cat-image');
      catImageElement.catInfo = {
        name: this._cats.breedInfo.name || 'A random cat',
        url,
      };
      catImageElement.clickEvent = addToCollection;
      this.appendChild(catImageElement);
    });
  }
}

customElements.define('cat-gallery', catGallery);
