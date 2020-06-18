/* eslint-disable no-underscore-dangle */
class catImage extends HTMLElement {
  set catInfo(catInfo) {
    this._catInfo = catInfo;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <figure>
        <img src="${this._catInfo.url}"  alt="${this._catInfo.name}">
        <figcaption>
          ${this._catInfo.name}
        </figcaption>
      </figure>
    `;

    if (!this._catInfo.isCollected) {
      const collectButton = document.createElement('button');
      collectButton.classList.add('btn', 'btn-dark', 'collect');
      collectButton.innerText = 'Add to Collection';
      this.appendChild(collectButton);

      this.querySelector('.collect').addEventListener('click', this._clickEvent);
    }
  }
}

customElements.define('cat-image', catImage);
