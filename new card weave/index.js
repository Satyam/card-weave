const tipos = ['EN', 'ON', 'EV', 'OV'];

const g = document.getElementById('letra');

let matriz = new Matriz(17, 10);

function redraw() {
  g.innerHTML = '';

  matriz.forEachCell((cell, row, col) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    el.dataset.col = col;
    el.dataset.row = row;
    el.dataset.tipo = tipos[(row + col) % 4];
    el.setAttribute('href', `#${col & 1 ? 'O' : 'E'}${cell ? 'N' : 'V'}`);
    el.setAttribute('x', col * 60);
    el.setAttribute('y', row * 30);
    g.appendChild(el);
  });
}

redraw();

g.addEventListener('click', (ev) => {
  const tile = ev.target;
  console.log(tile.dataset.row, tile.dataset.col, tile.dataset.tipo);
  const row = Number(tile.dataset.row);
  const col = Number(tile.dataset.col);
  const tipo = tile.dataset.tipo;
  matriz.toggle(row, col);
  tile.setAttribute(
    'href',
    `#${col & 1 ? 'O' : 'E'}${matriz.matriz[row][col] ? 'N' : 'V'}`
  );
});
