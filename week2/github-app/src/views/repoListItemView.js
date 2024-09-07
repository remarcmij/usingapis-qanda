export function createRepoListItemView({ repo }) {
  const root = document.createElement('li');
  root.className = 'list-item whiteframe';

  root.innerHTML = String.raw`
    <div>
      <h4>${repo.name}</h4>
      <p>${repo.description || 'No description available.'}</p>
    </div>
  `;

  return { root };
}
