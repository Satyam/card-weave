import React from 'react';

import U from './u';
import RO from './ro';
import OX from './ox';
import XY from './xy';
import YR from './yr';

import './zoo.css';

const STEPS = 20;

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
    fill: `rgb(${p(255, 219)}, ${p(35, 0)}, ${p(8, 154)})`,
    backColor: 'white',
    width: '25%',
    // transform: `
    // translate(${-counter * 5}, ${-counter * 5}),
    // scale(${(20 - counter) / 20}),
    // rotate(${counter * 5}, 300, 300)
    // `,
  };
  return (
    <>
      <U />
      {new Array(4).fill(1).map((_, row) => (
        <div key={row} className="row">
          {new Array(4).fill(1).map((_, i) => {
            const args1 = { ...args, p: (...a) => a[i] };
            const C = [RO, OX, XY, YR][row];
            return <C key={i} {...args1} />;
          })}
        </div>
      ))}
    </>
  );
}
