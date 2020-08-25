import React from 'react';
import './Carta.css';

export const ANCHO = 10;

function Carta({ dir, x, cell }) {
  return (
    <polyline
      points="2,2 8,2 8,6 6,8 4,8 2,6 2,2"
      transform={`translate(${x * ANCHO}) rotate(${dir * 90},5,5)`}
      className={cell ? 'full' : ''}
    />
  );
}

export default Carta;
