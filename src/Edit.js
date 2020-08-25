import React, { useState } from 'react';
import './Edit.css';
import { saveCard, newRow } from './card';

function Edit({ card }) {
  const [x, setX] = useState(false);

  const saveRefresh = (ev) => {
    ev.stopPropagation();
    setX(!x);
    saveCard(card);
  };

  const addRow = (ev) => {
    card.push(newRow());
    saveRefresh(ev);
  };

  const clickCell = (ev) => {
    const col = ev.target.dataset.col;
    if (col < 2 || col > 14) return;
    const row = ev.target.dataset.row;
    card[row][col] = !card[row][col];
    saveRefresh(ev);
  };

  const deleteRow = (ev) => {
    const row = ev.target.dataset.row;
    if (card.length === 1) {
      window.alert('No se puede borrar la última fila');
      return;
    }
    if (window.confirm(`Desea borrar la fila ${row}?`)) {
      card.splice(row, 1);
      saveRefresh(ev);
    }
  };

  const insertRow = (ev) => {
    const row = ev.target.dataset.row;
    card.splice(row, 0, newRow());
    saveRefresh(ev);
  };

  return (
    <div className="Edit">
      <button onClick={addRow} className="noPrint">
        Add Row
      </button>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {card[0].map((item, col) => (
              <th key={col}>{col + 1}</th>
            ))}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {card.map((item, row) => (
            <tr key={row}>
              <th>{row + 1}</th>
              {card[row].map((cell, col) => (
                <td
                  key={col}
                  data-row={row}
                  data-col={col}
                  onClick={clickCell}
                  className={cell ? 'full' : ''}
                >
                  {' '}
                </td>
              ))}
              <td
                onClick={insertRow}
                data-row={row}
                className="insertRow noPrint"
              >
                &lt;
              </td>
              <td
                onClick={deleteRow}
                data-row={row}
                className="deleteRow noPrint"
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="noPrint">
        Add Row
      </button>
    </div>
  );
}

export default Edit;
