export function loadPage(pageFactoryFn, props = {}) {
  const page = pageFactoryFn(props);
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = '';
  appRoot.appendChild(page.root);
}
