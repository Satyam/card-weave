class Matriz {
  constructor(rows = 17, cols = 10) {
    if (typeof rows === 'string') {
      this.matriz = localStorage.getItem(rows);
      if (!this.matriz) {
        alert(`Letra ${rows} no existe en el almacen`);
        this.matriz = [[]];
      }
    } else {
      this.clear(rows, cols);
    }
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
}
