import { createReposPage } from './pages/reposPage.js';
import { loadPage } from './util/loadPage.js';

function loadApp() {
  const state = {
    organization: 'HackYourFuture',
    error: null,
    loading: false,
    data: null,
    page: 1,
  };
  loadPage(createReposPage, state);
}

window.addEventListener('load', loadApp);
