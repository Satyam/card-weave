import React from 'react';
import './zoo.css';
const map = (n, fn) => new Array(n).fill(1).map((_, index) => fn(index));

const INC = 235;
const RADIO_MAX = 1000;
const GAJOS = 9;
const espiral = (cntInicial, cw) => {
  let r = 0;
  let antX = 0;
  let antY = 0;
  let count = cntInicial;
  const d = ['M0,0'];

  for (let x = 0, y = 0; r < RADIO_MAX; count = (count + 1) % 4) {
    r += INC;
    switch (count) {
      case 0:
        antX = x = antX + r;
        antY = y = antY + r;
        break;
      case 1:
        antX = x = antX + r;
        antY = y = antY - r;
        break;
      case 2:
        antX = x = antX - r;
        antY = y = antY - r;
        break;
      case 3:
        antX = x = antX - r;
        antY = y = antY + r;
        break;
      default:
        break;
    }
    d.push(`A ${r}, ${r} 90 0 ${cw ? 1 : 0} ${x}, ${y}`);
  }
  return d.join(' ');
};
export default function Espiral() {
  return (
    <svg
      viewBox={`-1000 -1000 2000 2000`}
      xmlns="http://www.w3.org/2000000/svg"
      className="espiral"
    >
      <defs>
        <path
          id="E"
          d={espiral(0, 0)}
          stroke="blue"
          fill="none"
          transform="translate(-50,-50)"
        />
      </defs>
      {map(GAJOS, (a) => (
        <g>
          <use href="#E" transform={`rotate(${(360 / GAJOS) * a})`} />
          <use
            href="#E"
            transform={`rotate(${(360 / GAJOS) * a}), scale(-1,1)`}
          />
        </g>
      ))}
      <circle r={RADIO_MAX} stroke="black" fill="none" strokeWidth={10} />
    </svg>
  );
}
