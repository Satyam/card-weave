const STORAGE_PREFIX = 'CW_';
const STATUS = { NUEVO: 'NUEVO', CAMBIADO: 'CAMBIADO', NORMAL: 'NORMAL' };
// eslint-disable-next-line no-unused-vars
class Matriz {
  constructor(rows, cols) {
    if (rows) this.clear(rows, cols);
    this._name = '';
    this.status = STATUS.NUEVO;
  }
  clear(rows, cols) {
    this.matriz = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
  }
  get rows() {
    return this.matriz.length;
  }
  get cols() {
    return this.matriz[0].length;
  }
  toggle(row, col) {
    this.matriz[row][col] = !this.matriz[row][col];
    this.status = STATUS.CAMBIADO;
  }
  forEachCell(cb) {
    this.matriz.forEach((line, row) =>
      line.forEach((cell, col) => cb(cell, row, col))
    );
  }
  static listeners = [];
  static suscribe(cb) {
    if (Matriz.listeners.includes(cb)) return;
    Matriz.listeners.push(cb);
  }
  get name() {
    return this._name;
  }
  set name(n) {
    if (this._name === n) return;
    this._name = n;
    Matriz.listeners.forEach((l) => l(this));
  }
  get status() {
    return this._status;
  }
  set status(s) {
    if (this._status === s) return;
    this._status = s;
    Matriz.listeners.forEach((l) => l(this));
  }
  static read(name) {
    const m = localStorage.getItem(STORAGE_PREFIX + name);
    if (m) {
      const newMatriz = new Matriz();
      newMatriz.matriz = JSON.parse(m);
      newMatriz.name = name;
      newMatriz.status = STATUS.NORMAL;
      return newMatriz;
    } else {
      alert(`Letra "${name}" no existe en el almacen`);
    }
  }
  save(newName) {
    localStorage.setItem(
      STORAGE_PREFIX + (newName ?? this.name),
      JSON.stringify(this.matriz)
    );
    this.status = STATUS.NORMAL;
    if (newName) this.name = newName;
  }
}
