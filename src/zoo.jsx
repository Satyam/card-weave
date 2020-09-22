import React from 'react';

import U from './u';
import Border from './border';
import RO from './ro';
import OX from './ox';
import XY from './xy';
import YR from './yr';

import './zoo.css';

const map = (n, fn) => new Array(n).fill(1).map((_, index) => fn(index));

const D = 4;

const colors = map(D, (depth) => {
  const q = (a, b) => Math.round(a + ((b - a) * depth) / (D - 1));

  return map(8, (i) => {
    const p = (a, b) => Math.round(a + ((b - a) * i) / 7);
    return [
      p(q(255, 107), q(219, 0)),
      p(q(35, 255), q(0, 68)),
      p(q(8, 8), q(154, 255)),
    ];
  });
});

colors.forEach((d) => d.forEach((c, i) => (d[15 - i] = c)));
export default function Zoo() {
  return (
    <>
      <Border />
      <U />
      {map(4, (row) => (
        <div key={row} className="row">
          {map(4, (col) => (
            <svg viewBox={`0 0 800 1200`} className="col" key={col}>
              {map(D, (depth) => {
                const rD = D - depth;
                const inv = 1 / rD;
                const color = `rgb(${colors[rD - 1][(row * 4 + col) % 16].join(
                  ','
                )})`;
                const args = {
                  backColor: 'white',
                  p: (...a) => a[col],
                  fill: color,
                  stroke: color,
                  transform: `
                  translate(${-(rD - 1) * 10}, ${-(rD - 1) * 10}),
                  scale(${inv}),
                    rotate(${(rD - 1) * 10}, 300, 300)
                    `,
                  fillOpacity: inv,
                  strokeOpacity: inv,
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
