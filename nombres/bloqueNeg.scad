use <bloques.scad>
use <cuore.scad>

/* Un solo bloque
difference() {
    // Cubo con marco
    translate([75,75,25]) cube([170, 170, 70], true);
    // Cubo justo al borde
    //translate([75,75,24]) cube([150, 150, 48], true);
    // Base cilíndrica
    // translate([75,75,24]) cylinder(r=80, h=50, center=true);
    translate([0,160,0]) rotate([90,0,0]) linear_extrude(180) Roxy();
    translate([-10,0,0]) rotate([90,0,90]) linear_extrude(180) Saty();
}
*/

/* Rodajas horizontales
for (z=[0:5:50]) difference() {
    translate([75,75,z]) cube([160, 160, 2], true);
    translate([0,157,0]) rotate([90,0,0]) linear_extrude(170) Roxy();
    translate([-7,0,0]) rotate([90,0,90]) linear_extrude(170) Saty();

}
*/

/* bloque con paneles * /
intersection() {
    translate([75,75,25]) cube([170, 170, 70], true);
    for (x = [-5:20: 155]) {
        for (y= [-5:20:155]) {
            difference() {
                translate([x, y, 25]) rotate([0,0,45]) cube([anchoPanel, 1, 70], true);
                translate([0,160,0]) rotate([90,0,0]) linear_extrude(180) Roxy();
                translate([160,150,0]) rotate([90,0,-90]) linear_extrude(180) Saty();
            }
        }
    }
}
*/
/*
    for (x = [-5:20: 155]) {
        for (y= [-5:20:155]) {
            echo([x, y, 25]);
        }
    }
*/

intervalo = 40;
offset=15;
anchoPanel = sqrt(2) * intervalo;

paneles = [for (x =[offset: intervalo: 160]) for (y=[offset: intervalo: 160]) [x, y, 25]];

malos=[0,1,4,5,9,11,14];
l = len(paneles);
for (i = [0:l-1]) {
    if (len(search(i, malos)) == 0) {
        color ([i/l, 1 - i/l, 0]) {
            intersection() {
                translate(paneles[i]) rotate([0,0,45]) cube([anchoPanel, 0.1, 70], true);
                RoxySatyNeg();
            }
        }
    }
}
//Roxys
for (p = [[55, 115, 25]]) {
    intersection() {
        translate(p) cube([intervalo, 0.1, 70], true);
        RoxySatyNeg();
    }
}
// Satys
for (p = [[75, 135,25], [115, 55, 25]]) {
    intersection() {
        translate(p) rotate([0,0,90]) cube([intervalo, 0.1, 70], true);
        RoxySatyNeg();
    }
}

// cuore Roxy
translate([30, 30, 0]) mirror([-1,1,0]) rotate([90,0,90])  core1();
translate([60, 60, 0]) rotate([90,0,0])  core2();
translate([90, 90, 0]) rotate([90,0,0])  core3();

// cuore Saty
translate([30, 30, 0])  rotate([90,0,90]) core1();
translate([60, 60, 0]) rotate([90,0,90]) core2();
translate([90, 90, 0]) rotate([90,0,90]) core3();
