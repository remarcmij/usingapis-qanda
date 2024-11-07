import ReposListViewItem from './ReposListViewItem.js';

export default class ReposView {
  #root = document.createElement('div');
  #viewProps;
  #selectOrg;
  #loadingIndicator;
  #listContainer;
  #nextBtn;
  #prevBtn;

  constructor(viewProps) {
    this.#viewProps = viewProps;
    this.#root.className = 'repos-container';
    this.#root.innerHTML = String.raw`
      <header class="header">
        <div class="header-content">
          <a href="#home" class="toolbar-button">
            <i class="fa-solid fa-house"></i>
          </a>
          <div>HYF Repositories</div>
        </div>
      </header>
      <div class="toolbar-view toolbar-view-flex">
        <div class="flex-row">
          <select id="select-org">
            <option value="HackYourFuture">HackYourFuture</option>
            <option value="HackYourAssignment">HackYourAssignment</option>
          </select>
        </div>      
      </div>
      <div class="loading-indicator hide">
        <div class="spin">
          <i class="fa-solid fa-spinner fa-2xl"></i>
        </div>
      </div>
      <div id="list-container"></div>
      <div class="button-container">
        <button id="prev-btn">Previous</button>
        <button id="next-btn">Next</button>
      </div>
    `;

    this.#selectOrg = this.#root.querySelector('#select-org');
    this.#loadingIndicator = this.#root.querySelector('.loading-indicator');
    this.#listContainer = this.#root.querySelector('#list-container');
    this.#prevBtn = this.#root.querySelector('#prev-btn');
    this.#nextBtn = this.#root.querySelector('#next-btn');

    this.#selectOrg.addEventListener('change', viewProps.onOrganizationChange);
    this.#prevBtn.addEventListener('click', viewProps.onPrevPage);
    this.#nextBtn.addEventListener('click', viewProps.onNextPage);
  }

  get root() {
    return this.#root;
  }

  update(state) {
    this.#selectOrg.value = state.organization;

    if (state.loading) {
      this.#loadingIndicator.classList.remove('hide');
      return;
    }

    this.#loadingIndicator.classList.add('hide');

    // Do not render if there is an error or if there is no data yet.
    if (state.error || !state.repos) {
      return;
    }
    // clear loading indicator
    this.#listContainer.innerHTML = '';

    const repoList = document.createElement('ul');
    repoList.className = 'no-bullets';
    this.#listContainer.appendChild(repoList);

    state.repos.forEach((repo) => {
      const listItemView = new ReposListViewItem({
        repo,
        onItemClick: this.#viewProps.onItemClick,
      });
      repoList.appendChild(listItemView.root);
    });

    this.#prevBtn.disabled = !state.hasPrev;
    this.#nextBtn.disabled = !state.hasNext;
  }
}
