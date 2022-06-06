#!/usr/bin/env zx
await $`rm -f *.png`;
for (let sec = 0; sec < 16; sec++) {
  await $`openscad ${[
    '-o',
    `frame${String(sec).padStart(4, '0')}.png`,
    '--render',
    '--projection',
    'orthogonal',
    // $vpt = [ 75, 75, 25 ];
    // $vpr =  [ 90, 0, 45 ];
    // $vpd =  250;
    '--camera',
    '75,75,25,90,0,45,250',
    '--imgsize',
    '1500,500',
    '-D',
    `sec=${sec}`,
    'secciones.scad',
  ]}`;
}
