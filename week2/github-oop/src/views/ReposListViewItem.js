export default class ReposListViewItem {
  #root = document.createElement('li');

  constructor(viewProps) {
    this.#root.className = 'list-item whiteframe';

    this.#root.innerHTML = String.raw`
      <li>
        <h4>${viewProps.repo.name}</h4>
        <p>${viewProps.repo.description || 'No description available.'}</p>
      </li>
    `;
  }

  get root() {
    return this.#root;
  }
}
