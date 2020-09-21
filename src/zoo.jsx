import React from 'react';

import U from './u';
import Border from './border';
import RO from './ro';
import OX from './ox';
import XY from './xy';
import YR from './yr';

import './zoo.css';

const map = (n, fn) => new Array(n).fill(1).map((_, index) => fn(index));

export default function Zoo() {
  const colors = map(8, (i) => {
    const p = (a, b) => Math.round(a + ((b - a) * i) / 7);
    return `rgb(${p(255, 219)}, ${p(35, 0)}, ${p(8, 154)})`;
  });
  colors.forEach((c, i) => (colors[15 - i] = c));

  const D = 4;
  return (
    <>
      <Border />
      <U />
      {map(4, (row) => (
        <div key={row} className="row">
          {map(4, (col) => (
            <svg viewBox={`-100 -100 800 1200`} className="col" key={col}>
              {map(D, (depth) => {
                const rD = D - depth;
                const inv = 1 / rD;
                const args = {
                  backColor: 'white',
                  p: (...a) => a[col],
                  fill: colors[(row * 4 + col + depth) % 16],
                  transform: `
                  translate(${-(rD - 1) * 10}, ${-(rD - 1) * 10}),
                  scale(${inv}),
                    rotate(${(rD - 1) * 10}, 300, 300)
                    `,
                  fillOpacity: inv,
                };
                const C = [RO, OX, XY, YR][row];
                return <C key={depth} {...args} />;
              })}
            </svg>
          ))}
        </div>
      ))}
    </>
  );
}
