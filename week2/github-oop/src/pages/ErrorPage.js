import { loadPage } from '../util/loadPage.js';
import ErrorView from '../views/ErrorView.js';
import ReposPage from './ReposPage.js';

export default class ErrorPage {
  #view;

  constructor(state) {
    const onRetry = () => {
      loadPage(ReposPage, state);
    };

    const viewProps = {
      error: state.error,
      onRetry,
    };

    this.#view = new ErrorView(viewProps);
  }

  get root() {
    return this.#view.root;
  }
}
