module hcore () translate([0,35,0]) rotate([0,45,0]) {
    intersection() {
        union() {
            translate([10,0,0]) cylinder(20,10,10);
            intersection() {
                translate([-15,0,0]) cylinder(20,35, 35);
                translate([0,-70,0]) cube([40,70,20]);
            };
        }
        rotate([0,-45,0]) translate([0,-35,0]) cube([40,50,0.1]);
    }
}

module core1 () intersection() {
    hcore();
    cube([10,50,20]);
}

module core2 () intersection() {
    hcore();
    translate([10,0,0]) cube([10,50,20]);
}

module core3 () intersection() {
    hcore();
    translate([20,0,0]) cube([10,50,20]);
}
core1();
translate([0,0,2]) core2();
translate([0,0,4]) core3();
