use <../bloques.scad>
use <../cuore.scad>

intervalo = 40;
offset=15;
anchoPanel = sqrt(2) * intervalo;

paneles = [for (x =[offset: intervalo: 160]) for (y=[offset: intervalo: 160]) [x, y, 25]];

t = 0;
d = 0;
r = 0;
s = 0;
c = 0;
//diagonales
panelesBuenos = [2,3,6,7,8,10,12,13,15];
module diagonal(i) {
    intersection() {
        translate(paneles[i]) rotate([0,0,45]) cube([anchoPanel, 0.1, 70], true);
        RoxySatyNeg();
    }
}

if (t) {
    if (d) diagonal(panelesBuenos[d -1]);
} else {
    for (i = [0:len(panelesBuenos) -1]) {
        diagonal(panelesBuenos[i]);
    }
}
    
//Roxys
if (!t || r) {
    intersection() {
        translate([55, 115, 25]) cube([intervalo, 0.1, 70], true);
        RoxySatyNeg();
    }
}

// Satys
satysBuenos = [[75, 135,25], [115, 55, 25]];
if (t) {
    if (s) intersection() {
        translate(satysBuenos[s-1]) rotate([0,0,90]) cube([intervalo, 0.1, 70], true);
        RoxySatyNeg();
    }
} else {
    for (p = satysBuenos) {
        intersection() {
            translate(p) rotate([0,0,90]) cube([intervalo, 0.1, 70], true);
            RoxySatyNeg();
        }
    }
}

// cuore Roxy
if (!t || c == 1) translate([30, 30, 0]) mirror([-1,1,0]) rotate([90,0,90])  core1();
if (!t || c == 2) translate([60, 60, 0]) rotate([90,0,0]) core2();
if (!t || c == 3) translate([90, 90, 0]) rotate([90,0,0]) core3();

// cuore Saty
if (!t || c == 4) translate([30, 30, 0]) rotate([90,0,90]) core1();
if (!t || c == 5) translate([60, 60, 0]) rotate([90,0,90]) core2();
if (!t || c == 6) translate([90, 90, 0]) rotate([90,0,90]) core3();
