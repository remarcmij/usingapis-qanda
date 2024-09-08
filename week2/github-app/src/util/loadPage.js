export function loadPage(pageFactoryFn, state = {}) {
  const page = pageFactoryFn(state);
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = '';
  appRoot.appendChild(page.root);
}
