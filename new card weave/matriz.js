class Matriz {
  constructor(rows = 17, cols = 10) {
    this.clear(rows, cols);
    this.name = null;
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
  }
  forEachCell(cb) {
    this.matriz.forEach((line, row) =>
      line.forEach((cell, col) => cb(cell, row, col))
    );
  }
  read(name) {
    const m = localStorage.getItem(name);
    if (m) {
      this.name = name;
      this.matriz = JSON.parse(m);
    } else {
      alert(`Letra "${name}" no existe en el almacen`);
    }
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.matriz));
  }
}
