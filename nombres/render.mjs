#!/usr/bin/env zx
const opts = [
  '--render',
  '--projection',
  'orthogonal',
  // '--view',
  // 'wireframe',
  // '--colorscheme',
  // 'Monotone',
  // '--imgsize',
  // '2000,500',
  // '--camera',
  // '',
];

const camera = (s) => ['--camera', s];
const imageSize = (w = 2000, h = 500) => ['--imgsize', `${w},${h}`];

await [15, 35, 55, 75, 95, 115, 135].reduce(
  (p, i) =>
    p.then(
      () =>
        $`openscad -o nombres${i}.png -D sec=${i} ${opts} ${camera(
          '200,200,22,75,75,22'
        )} ${imageSize()} nombres.scad`
    ),
  Promise.resolve()
);
await [1, 2, 3].reduce(
  (p, i) =>
    p.then(
      () =>
        $`openscad -o nombresc${i}.png -D cor=${i} ${opts} ${camera(
          '75,252,22,75,75,22'
        )} ${imageSize(500)} nombres.scad`
    ),
  Promise.resolve()
);
await [4, 5, 6].reduce(
  (p, i) =>
    p.then(
      () =>
        $`openscad -o nombresc${i}.png -D cor=${i} ${opts} ${camera(
          '252,75,22,75,75,22'
        )} ${imageSize(500)} nombres.scad`
    ),
  Promise.resolve()
);
await $`openscad -o nombresRoxy.png  ${opts} ${camera(
  '75,-200,22,75,75,22'
)} ${imageSize()} nombres.scad`;
await $`openscad -o nombresSaty.png  ${opts} ${camera(
  '200,75,22,75,75,22'
)} ${imageSize()} nombres.scad`;
await $`openscad -o nombresTop.png  ${opts} ${camera(
  '75,75,400,75,75,22'
)} ${imageSize(1500, 1500)} nombres.scad`;
