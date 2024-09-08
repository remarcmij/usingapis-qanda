export function loadPage(pageFactoryFn, state) {
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = '';
  const page = pageFactoryFn(state);
  appRoot.appendChild(page.root);
}
