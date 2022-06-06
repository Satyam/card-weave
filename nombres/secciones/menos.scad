use <../bloques.scad>
intervalo= 40;
offset=15;
anchoPanel = sqrt(2) * intervalo;
coords = [for (x =[offset: intervalo: 160]) for (y=[offset: intervalo: 160]) [x, y, 25]];

menos=-1;
l = len(coords);
for (i = [0:l-1]) {
  if (menos != i ) {
    color ([i/l, 1 - i/l, 0]) {
      intersection() {
          translate(coords[i]) rotate([0,0,45]) cube([anchoPanel, 0.1, 70], true);
          RoxySatyNeg();
      }
    }
  }
}