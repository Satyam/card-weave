import React from 'react';
import './Show.css';
import Carta, { ANCHO, ORANGE, PURPLE, UP, DOWN } from './Carta';
import { WIDTH, newRow } from './card';

function Show({ card }) {
  const previous = newRow();

  return card.map((row, rowNbr) => (
    <React.Fragment key={rowNbr}>
      <svg
        viewBox={`0 0 ${WIDTH * ANCHO} ${ANCHO}`}
        xmlns="http://www.w3.org/2000/svg"
        width="60%"
      >
        {row.map((cell, col) => (
          <Carta key={col} dir={cell ? ORANGE : PURPLE} x={col} cell={cell} />
        ))}
      </svg>
      <svg
        viewBox={`0 0 ${WIDTH * ANCHO} ${ANCHO}`}
        xmlns="http://www.w3.org/2000/svg"
        width="60%"
      >
        {row.map((cell, col) => {
          previous[col] = !previous[col];
          return (
            <Carta
              key={col}
              dir={previous[col] ? DOWN : UP}
              x={col}
              cell={cell}
            />
          );
        })}
      </svg>
    </React.Fragment>
  ));
}

export default Show;
