const g = document.getElementById('letra');

const matriz = new Matriz(17, 10);

function redraw() {
  g.innerHTML = '';

  matriz.forEachCell((cell, row, col) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    el.dataset.col = col;
    el.dataset.row = row;
    el.setAttribute('href', `#${col & 1 ? 'O' : 'E'}${cell ? 'N' : 'V'}`);
    el.setAttribute('x', col * 60);
    el.setAttribute('y', row * 30);
    g.appendChild(el);
  });
}

redraw();

function listPatrones() {
  const ul = document.getElementById('patrones');
  const list = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k.startsWith('_')) continue;
    list.push(`<li><a href="${k}">${k}</a></li>`);
  }
  if (list.length) {
    ul.innerHTML = list.join('\n');
  } else {
    ul.innerHTML = `<li> ---  No hay patrones guardados ---`;
  }
}

listPatrones();

g.addEventListener('click', (ev) => {
  const tile = ev.target;
  const row = Number(tile.dataset.row);
  const col = Number(tile.dataset.col);
  matriz.toggle(row, col);
  tile.setAttribute(
    'href',
    `#${col & 1 ? 'O' : 'E'}${matriz.matriz[row][col] ? 'N' : 'V'}`
  );
});
