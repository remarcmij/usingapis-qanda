import { API_BASE_URL } from '../constants.js';
import { fetchSlowAndUnreliable } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createReposView } from '../views/reposView.js';
import { createErrorPage } from './errorPage.js';

export function createReposPage(state) {
  const onOrganizationChange = (e) => {
    state = { ...state, organization: e.target.value };
    // Update the page based on the new organization value
    update();
  };

  const reposView = createReposView({ onOrganizationChange });

  const update = async () => {
    try {
      // Update the View so that a loading indicator is shown while
      // data is being fetched.
      state = { ...state, error: null, loading: true, repos: null };
      reposView.update(state);

      const url = `${API_BASE_URL}/orgs/${state.organization}/repos?per_page=100`;
      const repos = await fetchSlowAndUnreliable(url);
      repos.sort((a, b) => a.name.localeCompare(b.name));

      // Update the View to hide the loading indicator and update the View
      // with the fetched data.
      state = { ...state, repos, loading: false };
      reposView.update(state);
    } catch (error) {
      // Update the state with the error information and load the Error Page
      state = { ...state, error, loading: false };
      loadPage(createErrorPage, state);
    }
  };

  // Do an initial update of the page when the page is created.
  update();

  return reposView;
}
