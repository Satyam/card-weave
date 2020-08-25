import React from 'react';
import './Show.css';
import Carta, { ANCHO } from './Carta';
import { WIDTH } from './card';
function Show({ card }) {
  return card.map((row, rowNbr) => (
    <svg
      key={rowNbr}
      viewBox={`0 0 ${WIDTH * ANCHO} ${ANCHO}`}
      xmlns="http://www.w3.org/2000/svg"
      width="50%"
    >
      {row.map((cell, col) => (
        <Carta key={col} dir={rowNbr % 4} x={col} cell={cell} />
      ))}
    </svg>
  ));
}

export default Show;
