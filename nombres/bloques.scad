use <RoxySaty.scad>

module RoxySaty() {
  union() {
    translate([  0, 165, 0]) rotate([90, 0,  0]) linear_extrude(180) Roxy();
    translate([165, 150, 0]) rotate([90, 0,-90]) linear_extrude(180) Saty();
  }
}

module RoxySatyNeg() {
  difference() {
    translate([75, 75, 25]) cube([170, 170, 70], true);
    RoxySaty();
  }
}