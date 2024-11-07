import { loadPage } from '../util/loadPage.js';
import { createErrorView } from '../views/errorView.js';
import { createReposPage } from './reposPage.js';

export function createErrorPage(state) {
  const onRetry = () => {
    loadPage(createReposPage, state);
  };

  const viewProps = {
    error: state.error,
    onRetry,
  };

  return createErrorView(viewProps);
}
