import { createRepoListItemView } from './repoListItemView.js';

export function createReposView(viewProps) {
  const root = document.createElement('div');
  root.className = 'repos-container';
  root.innerHTML = String.raw`
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

  const selectOrg = root.querySelector('#select-org');
  const loadingIndicator = root.querySelector('.loading-indicator');
  const listContainer = root.querySelector('#list-container');
  const prevBtn = root.querySelector('#prev-btn');
  const nextBtn = root.querySelector('#next-btn');

  selectOrg.addEventListener('change', viewProps.onOrganizationChange);
  prevBtn.addEventListener('click', viewProps.onPrevPage);
  nextBtn.addEventListener('click', viewProps.onNextPage);

  const update = (state) => {
    selectOrg.value = state.organization;

    if (state.loading) {
      loadingIndicator.classList.remove('hide');
      return;
    }

    loadingIndicator.classList.add('hide');

    // Do not render if there is an error or if there is no data yet.
    if (state.error || !state.data) {
      return;
    }
    // clear loading indicator
    listContainer.innerHTML = '';

    const repoList = document.createElement('ul');
    repoList.className = 'no-bullets';
    listContainer.appendChild(repoList);

    state.data.forEach((repo) => {
      const listItemView = createRepoListItemView({
        repo,
        onItemClick: viewProps.onItemClick,
      });
      repoList.appendChild(listItemView.root);
    });

    prevBtn.disabled = !state.hasPrev;
    nextBtn.disabled = !state.hasNext;
  };

  return { root, update };
}
