export default function() {
  let container = document.createElement('span');
  container.classList.add('HUD-container');

  let info = document.createElement('p');
  info.classList.add('HUD-info');
  container.appendChild(info);

  document.body.appendChild(container);

  return container;
}
