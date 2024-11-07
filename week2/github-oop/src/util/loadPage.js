export function loadPage(Page, state) {
  const appRoot = document.querySelector('#app-root');
  appRoot.innerHTML = '';
  const page = new Page(state);
  appRoot.appendChild(page.root);
}
