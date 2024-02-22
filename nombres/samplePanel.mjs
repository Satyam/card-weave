#!/usr/bin/env zx

const pre = `
use <RoxySaty.scad>

anchoPanel = sqrt(2) * 20;

intersection() {
  translate([75,75,25]) cube([170, 170, 70], true);
  for (p = [`;

const post = `
, ]) {
    difference() {
      translate(p) rotate([0,0,45]) cube([anchoPanel, 1, 70], true);
      translate([0,160,0]) rotate([90,0,0]) linear_extrude(180) Roxy();
      translate([160,150,0]) rotate([90,0,-90]) linear_extrude(180) Saty();
    }
  }
}`;

const panels = [];
for (let x = -5; x <= 155; x += 20)
  for (let y = -5; y <= 155; y += 20) panels.push(`[${x}, ${y}, 25]`);

const rechazos = [];
const obligados = [0, panels.length - 1];
function nuevoRechazo() {
  let n;
  while (true) {
    n = Math.floor(Math.random() * panels.length);
    if (!(rechazos.includes(n) || obligados.includes(n))) return n;
  }
}

let candidato = 0;

function sample(con) {
  const r = con ? rechazos.concat(candidato) : rechazos;
  return panels.filter((v, i) => !r.includes(i)).join(',\n');
}

async function show(con) {
  await fs.writeFile('./sample.scad', pre + sample(con) + post);
  //   await $`openscad -o sampleRoxy.png \
  // --render --projection orthogonal \
  // --camera  75,-200,22,75,75,22 \
  // --imgsize 1500,500 \
  // sample.scad`;
  await $`openscad -o sampleSaty.png \
  --render --projection orthogonal \
  --camera  -200,75,22,75,75,22 \
  --imgsize 1500,500  \
  sample.scad
  `;
}

await show(false);
while (true) {
  let op = await question(
    'n: nuevo, s: sin, c: con, r: rechazar, o: obligar, m: mostrar, x: salir ',
    {
      choices: ['n', 's', 'c', 'r', 'o', 'm', 'x'],
    }
  );

  switch (op) {
    case 'x':
      process.exit();
      break;
    case 'm':
      console.log(sample());
      break;
    case 'n':
      candidato = nuevoRechazo();
      await show(true);
      break;
    case 's':
      await show(false);
      break;
    case 'c':
      await show(true);
      break;
    case 'r':
      rechazos.push(candidato);
      await show(false);
      candidato = nuevoRechazo();
      break;
    case 'o':
      obligados.push(candidato);
      await show(false);
      candidato = nuevoRechazo();
      break;
  }
  console.log({ candidato, rechazos, obligados });
}
