#!/usr/bin/env zx

const opts = [
  '--render',
  '--projection',
  'orthogonal',
  // '--view',
  // 'wireframe',
  // '--colorscheme',
  // 'Monotone',
  '--imgsize',
  '2000,500',
  '--camera',
  '252,75,22,75,75,22',
];

await [0, 1, 2, 3, 4, 5, 6].reduce(
  (p, i) =>
    p.then(
      () => $`openscad -o trans${i}.png -D sec=${i} ${opts} transNeg.scad`
    ),
  Promise.resolve()
);
