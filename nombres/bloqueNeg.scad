use <RoxySaty.scad>

difference() {
    translate([75,75,22]) cube([160, 160, 65], true);
    translate([0,157,0]) rotate([90,0,0]) linear_extrude(170) Roxy();
    translate([-7,0,0]) rotate([90,0,90]) linear_extrude(170) Saty();
}
