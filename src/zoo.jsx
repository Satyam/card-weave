import React from 'react';

import U from './u';
import RO from './ro';
import OX from './ox';
import XY from './xy';
import YR from './yr';

import './zoo.css';

const STEPS = 20;

const map = (n, fn) => new Array(n).fill(1).map((_, index) => fn(index));

export default function Zoo() {
  const step = 1;
  const p = (...args) => {
    const l = args.length;
    const f = (step * (l - 1)) / STEPS;
    const i = Math.min(l - 2, Math.floor(f));
    const c = f - i;
    // console.log(step, { l, f, i, c });
    return Math.round(args[i] + (args[i + 1] - args[i]) * c);
  };
  const args = {
    backColor: 'white',
    width: '25%',
    // transform: `
    // translate(${-counter * 5}, ${-counter * 5}),
    // scale(${(20 - counter) / 20}),
    // rotate(${counter * 5}, 300, 300)
    // `,
  };
  const colors = map(8, (i) => {
    const p = (a, b) => Math.round(a + ((b - a) * i) / 7);
    return `rgb(${p(255, 219)}, ${p(35, 0)}, ${p(8, 154)})`;
  });
  colors.forEach((c, i) => (colors[15 - i] = c));

  return (
    <>
      <U />
      {map(4, (row) => (
        <div key={row} className="row">
          {map(4, (col) => {
            const args1 = {
              ...args,
              p: (...a) => a[col],
              fill: colors[row * 4 + col],
            };
            console.log(row, col, row * 4 + col, colors[row * 4 + col]);
            const C = [RO, OX, XY, YR][row];
            return <C key={col} {...args1} />;
          })}
        </div>
      ))}
    </>
  );
}
