/* eslint-disable no-underscore-dangle */
import breeds from '../data/catBreed';

class breedSearch extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    const breed = this.querySelector('#breed').value;
    const imageCount = parseInt(this.querySelector('#imagecount').value, 10);

    return { imageCount, breed };
  }

  render() {
    this.innerHTML = `
        <form>
          <div class="form-row">
            <div class="col">
              <select class="custom-select" id="breed" placeholder="Pick Your Breed" required></select>
            </div>
            <div class="col">
              <input type=number min="1" max="8" class="form-control" id="imagecount" placeholder="How many?" required>
            </div>
            <div class="col">
              <button type="submit" class="search btn btn-light form-control">GO</button>
            </div>
          </div>
        </form>
    `;

    const selectMenu = this.querySelector('.custom-select');

    breeds.forEach((breed) => {
      const option = document.createElement('option');

      option.setAttribute('value', breed.id);
      option.innerText = breed.name;

      selectMenu.appendChild(option);
    });

    this.querySelector('.search').addEventListener('click', this._clickEvent);
  }
}

customElements.define('breed-search', breedSearch);
