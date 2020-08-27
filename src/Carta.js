import React from 'react';
import './Carta.css';

export const ANCHO = 10;

export const DOWN = 0;
export const PURPLE = 1;
export const UP = 2;
export const ORANGE = 3;

function Carta({ dir, x, cell }) {
  return (
    <path
      d="M 2,2 L 8,2 L 8,6 L 6,8 L 4,8 L 2,6 z"
      transform={`translate(${x * ANCHO}) rotate(${dir * 90},5,5)`}
      className={cell ? 'purple' : 'orange'}
    />
  );
}

export default Carta;
