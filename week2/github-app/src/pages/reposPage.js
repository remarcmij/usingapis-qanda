import { API_BASE_URL } from '../constants.js';
import { fetchSlowAndUnreliable } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createReposView } from '../views/reposView.js';
import { createErrorPage } from './errorPage.js';

export function createReposPage(state) {
  const onOrganizationChange = (e) => {
    state = { ...state, organization: e.target.value };
    render();
  };

  const reposView = createReposView({ onOrganizationChange });

  const render = async () => {
    try {
      state = { ...state, error: null, loading: true, repos: null };
      reposView.update(state);
      const url = `${API_BASE_URL}/orgs/${state.organization}/repos?per_page=100`;
      const repos = await fetchSlowAndUnreliable(url);
      repos.sort((a, b) => a.name.localeCompare(b.name));
      state = { ...state, repos, loading: false };
      reposView.update(state);
    } catch (error) {
      state = { ...state, error, loading: false };
      loadPage(createErrorPage, state);
    }
  };

  render();

  return reposView;
}
