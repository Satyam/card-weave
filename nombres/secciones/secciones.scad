use <../bloques.scad>
intervalo= 40;
offset=15;
anchoPanel = sqrt(2) * intervalo;
coords = [for (x =[offset: intervalo: 160]) for (y=[offset: intervalo: 160]) [x, y, 25]];

sec=0;
echo(len(coords));
intersection() {
    translate(coords[sec]) rotate([0,0,45]) cube([anchoPanel, 0.1, 70], true);
    RoxySatyNeg();
}