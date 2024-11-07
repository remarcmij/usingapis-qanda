export function createRepoListItemView(viewProps) {
  const root = document.createElement('li');
  root.className = 'list-item whiteframe';

  root.innerHTML = String.raw`
    <li>
      <h4>${viewProps.repo.name}</h4>
      <p>${viewProps.repo.description || 'No description available.'}</p>
    </li>
  `;

  return { root };
}
