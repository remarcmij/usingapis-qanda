export default class ErrorView {
  #root = document.createElement('div');

  constructor(viewProps) {
    this.#root.className = 'dialog-container whiteframe';
    this.#root.innerHTML = String.raw`
      <h4>Oops... Something went wrong</h4>
      <div>
        ${viewProps.error?.message || 'Unknown error'}
      </div>
      <button id="retry-btn">Retry</button>
    `;

    const retryButton = this.#root.querySelector('#retry-btn');
    retryButton.addEventListener('click', viewProps.onRetry);
  }

  get root() {
    return this.#root;
  }
}
