/* global Matriz, STORAGE_PREFIX, STATUS */
const svgEl = document.getElementById('svg');
const letraPanel = document.getElementById('letra');
const positionEl = document.getElementById('position');
const rowsEl = document.getElementById('rows');
const colsEl = document.getElementById('cols');
const newBtn = document.getElementById('nuevo');
const nameEl = document.getElementById('nombre');
const saveBtn = document.getElementById('guardar');
const saveAsBtn = document.getElementById('guardarComo');
const patronesUl = document.getElementById('patrones');

let matriz = null;

function redraw() {
  letraPanel.innerHTML = '';

  matriz.forEachCell((cell, row, col) => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    el.dataset.col = col;
    el.dataset.row = row;
    el.setAttribute('href', `#${col & 1 ? 'O' : 'E'}${cell ? 'N' : 'V'}`);
    el.setAttribute('x', col * 60);
    el.setAttribute('y', row * 30);
    letraPanel.appendChild(el);
  });
}

function listPatrones() {
  const list = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k.startsWith(STORAGE_PREFIX)) continue;
    const name = k.replace(STORAGE_PREFIX, '');
    if (name.startsWith('_')) continue;
    list.push(`<li><a href="${name}">${name}</a></li>`);
  }
  if (list.length) {
    patronesUl.innerHTML = list.join('\n');
  } else {
    patronesUl.innerHTML = `<li> ---  No hay patrones guardados ---`;
  }
}

// redraw();
listPatrones();

letraPanel.addEventListener('click', (ev) => {
  const tile = ev.target;
  const row = Number(tile.dataset.row);
  const col = Number(tile.dataset.col);
  matriz.toggle(row, col);
  tile.setAttribute(
    'href',
    `#${col & 1 ? 'O' : 'E'}${matriz.matriz[row][col] ? 'N' : 'V'}`
  );
});

newBtn.addEventListener('click', () => {
  const rows = Number(rowsEl.value) || 17;
  const cols = Number(colsEl.value) || 10;
  svgEl.setAttribute('viewBox', `0,0,${cols * 60},${rows * 30}`);
  matriz = new Matriz(rows, cols);
  redraw();
});

letraPanel.addEventListener('mousemove', (ev) => {
  const d = ev.target.dataset;
  positionEl.innerText = `Fila: ${Number(d.row) + 1} Columna: ${
    Number(d.col) + 1
  }`;
});

Matriz.suscribe((m) => {
  console.log(m.status, m.name);
  switch (m.status) {
    case STATUS.NORMAL:
      saveBtn.disabled = true;
      saveAsBtn.disabled = false;
      break;
    case STATUS.CAMBIADO:
      saveBtn.disabled = !m.name;
      saveAsBtn.disabled = false;
      break;
    case STATUS.NUEVO:
      saveBtn.disabled = true;
      saveAsBtn.disabled = false;
      break;
    default:
      console.error('status desconocido', m.status);
  }
  nameEl.value = m.name;
});

saveBtn.addEventListener('click', () => {
  matriz.save();
});

saveAsBtn.addEventListener('click', () => {
  const name = window.prompt('Ingrese el nuevo nombre', matriz.name);
  if (name) {
    matriz.save(name);
    listPatrones();
  }
});

patronesUl.addEventListener('click', (ev) => {
  ev.preventDefault();
  matriz = Matriz.read(ev.target.getAttribute('href'));
  if (matriz) redraw();
});
