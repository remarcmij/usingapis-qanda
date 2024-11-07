import { API_BASE_URL } from '../constants.js';
import { fetchSlowAndUnreliably } from '../util/fetchData.js';
import { loadPage } from '../util/loadPage.js';
import ReposView from '../views/ReposView.js';
import ErrorPage from './ErrorPage.js';

export default class ReposPage {
  #state;
  #page;
  #view;

  constructor(state) {
    this.#state = state;
    this.#page = 1;

    const viewProps = {
      onOrganizationChange: this.onOrganizationChange,
      onNextPage: this.onNextPage,
      onPrevPage: this.onPrevPage,
    };

    this.#view = new ReposView(viewProps);
    this.update();
  }

  get root() {
    return this.#view.root;
  }

  onOrganizationChange = (e) => {
    this.#page = 1;
    this.#state = { ...this.#state, organization: e.target.value };
    // Update the page based on the new organization value
    this.update();
  };

  onNextPage = () => {
    this.#page += 1;
    this.update();
  };

  onPrevPage = () => {
    this.#page -= 1;
    this.update();
  };

  async update() {
    try {
      // Update the View so that a loading indicator is shown while
      // data is being fetched.
      this.#state = { ...this.#state, error: null, loading: true, repos: null };
      this.#view.update(this.#state);

      const url = `${API_BASE_URL}/orgs/${
        this.#state.organization
      }/repos?per_page=5&page=${this.#page}`;
      const { data, headers } = await fetchSlowAndUnreliably(url);

      // Check whether there is a next and/or a prev page to go to
      const linkItems = headers.get('Link').split(',');
      const prevItem = linkItems.find((item) => item.endsWith('rel="prev"'));
      const nextItem = linkItems.find((item) => item.endsWith('rel="next"'));

      // Update the View to hide the loading indicator and update the View
      // with the fetched data.
      this.#state = {
        ...this.#state,
        repos: data,
        loading: false,
        hasPrev: !!prevItem,
        hasNext: !!nextItem,
      };
      this.#view.update(this.#state);
    } catch (error) {
      // Update the state with the error information and load the Error Page
      this.#state = { ...this.#state, error, loading: false };
      loadPage(ErrorPage, this.#state);
    }
  }
}
