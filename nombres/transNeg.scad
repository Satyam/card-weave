use <bloques.scad>
use <cuore.scad>


intervalo = 40;
offset=15;
anchoPanel = sqrt(2) * intervalo;

paneles = [for (x =[offset: intervalo: 160]) for (y=[offset: intervalo: 160]) [x, y, 25]];

sec = -1;
if (sec >= 0) {
    intersection() {
        translate([15 + 20 * sec,135 - 20 * sec, 25 ]) rotate([0,0,45]) cube([160 * sqrt(2), 0.1, 70], true);
        RoxySatyNeg();
    }
} else {
    l = len(paneles);
    for (i = [0:l-1]) {
        intersection() {
            translate(paneles[i]) rotate([0,0,45]) cube([anchoPanel, 0.1, 70], true);
            RoxySatyNeg();
        }
    }

    // fondo saty
    // intersection() {
    //     translate([155, -5, -10] ) cube([0.1, 160, 70]);
    //     RoxySatyNeg();
    // }

    // // fondo roxy
    // intersection() {
    //     translate([-5, 155, -10]) cube([160, 0.1, 70]);
    //     RoxySatyNeg();
    // }
}