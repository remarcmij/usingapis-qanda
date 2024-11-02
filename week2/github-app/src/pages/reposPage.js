import { API_BASE_URL } from '../constants.js';
import { fetchSlowAndUnreliable as fetchSlowAndUnreliably } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import { createReposView } from '../views/reposView.js';
import { createErrorPage } from './errorPage.js';

export function createReposPage(state) {
  let page = 1;

  const onOrganizationChange = (e) => {
    page = 1;
    state = { ...state, organization: e.target.value };
    // Update the page based on the new organization value
    update();
  };

  const onNextPage = () => {
    page += 1;
    update();
  };

  const onPrevPage = () => {
    page -= 1;
    update();
  };

  const reposView = createReposView({
    onOrganizationChange,
    onNextPage,
    onPrevPage,
  });

  const update = async () => {
    try {
      // Update the View so that a loading indicator is shown while
      // data is being fetched.
      state = { ...state, error: null, loading: true, repos: null };
      reposView.update(state);

      const url = `${API_BASE_URL}/orgs/${state.organization}/repos?per_page=5&page=${page}`;
      const { data, headers } = await fetchSlowAndUnreliably(url);

      // Check whether there is a next and/or a prev page to go to
      const linkItems = headers.get('Link').split(',');
      const prevItem = linkItems.find((item) => item.endsWith('rel="prev"'));
      const nextItem = linkItems.find((item) => item.endsWith('rel="next"'));

      // Update the View to hide the loading indicator and update the View
      // with the fetched data.
      state = {
        ...state,
        repos: data,
        loading: false,
        hasPrev: !!prevItem,
        hasNext: !!nextItem,
      };
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
