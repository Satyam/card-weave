#!/usr/bin/env zx

await $`rm -f *.png`;

for (let menos = 0; menos < 17; menos++) {
  await $`openscad ${[
    '-o',
    `frame${String(menos).padStart(3, '0')}r.png`,
    '--render',
    '--projection',
    'orthogonal',
    '--camera',
    '75,75,25,90,0,0,250',
    '--imgsize',
    '1500,500',
    '-D',
    `menos=${menos}`,
    'menos.scad',
  ]}`;
  await $`openscad ${[
    '-o',
    `frame${String(menos).padStart(3, '0')}s.png`,
    '--render',
    '--projection',
    'orthogonal',
    '--camera',
    '75,75,25,90,0,270,250',
    '--imgsize',
    '1500,500',
    '-D',
    `menos=${menos}`,
    'menos.scad',
  ]}`;
}
