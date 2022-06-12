#!/usr/bin/env zx

await $`rm -f *.png`;

const opts = [
  '--render',
  '--projection',
  'orthogonal',
  '--imgsize',
  '1500,500',
  '-D',
  't=1',
  'cortes.scad',
  '--view',
  'wireframe',
  '--colorscheme',
  'Monotone',
];
for (let d = 1; d < 10; d++) {
  await $`openscad ${[
    '-o',
    `d${String(d).padStart(3, '0')}.png`,
    '--camera',
    '75,75,25,90,0,45,200',
    '-D',
    `d=${d}`,
    ...opts,
  ]}`;
}

for (let r = 1; r < 3; r++) {
  await $`openscad ${[
    '-o',
    `r${r}.png`,
    '--camera',
    '75,75,25,90,0,0,200',
    '-D',
    `r=${r}`,
    ...opts,
  ]}`;
}

for (let s = 1; s < 5; s++) {
  await $`openscad ${[
    '-o',
    `s${s}.png`,
    '--camera',
    '75,75,25,90,0,270,200',
    '-D',
    `s=${s}`,
    ...opts,
  ]}`;
}

for (let c = 1; c < 4; c++) {
  await $`openscad ${[
    '-o',
    `c${String(c).padStart(3, '0')}.png`,
    '--camera',
    '75,75,25,90,0,0,200',
    '-D',
    `c=${c}`,
    ...opts,
  ]}`;
}

for (let c = 4; c < 7; c++) {
  await $`openscad ${[
    '-o',
    `c${String(c).padStart(3, '0')}.png`,
    '--camera',
    '75,75,25,90,0,270,200',
    '-D',
    `c=${c}`,
    ...opts,
  ]}`;
}
