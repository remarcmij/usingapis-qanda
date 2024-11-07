import ReposPage from './pages/ReposPage.js';
import { loadPage } from './util/loadPage.js';

function loadApp() {
  const state = {
    organization: 'HackYourFuture',
    error: null,
    loading: false,
    repos: null,
  };
  loadPage(ReposPage, state);
}

window.addEventListener('load', loadApp);
