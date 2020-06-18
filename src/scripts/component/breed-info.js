/* eslint-disable no-underscore-dangle */
class breedInfo extends HTMLElement {
  set catInfo(catInfo) {
    this._catInfo = catInfo;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article>
        <h2>${this._catInfo.name}</h2>
        <table class="table table-striped table-dark">
          <tr>
            <th>
              Name
            </th>
            <td>
              ${this._catInfo.name}
            </td>
          </tr>
          <tr>
            <th>
              Description
            </th>
            <td>
            ${this._catInfo.description}
            </td>
          </tr>
          <tr>
            <th>
              Origin
            </th>
            <td>
              ${this._catInfo.origin}
            </td>
          </tr>
          <tr>
            <th>
              temperament
            </th>
            <td>
              ${this._catInfo.temperament}
            </td>
          </tr>
        </table>
      </article>
    `;
  }
}

customElements.define('breed-info', breedInfo);
