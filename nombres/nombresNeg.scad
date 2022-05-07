use <RoxySaty.scad>


module guia (a) {
    translate([a,a,20]) rotate([0,0,-45]) cube([250,1,80],center = true);
}

module box () {
    translate([75,75,22]) {
        difference () {
            cube([172, 172, 67], true);
            cube([170, 170, 65], true);
        }
    }
}

sec=0;
cor=0;
if (cor == 0){
    if (sec > 0) {
      difference() {
        intersection() {
          guia(sec);
          translate([75,75,22]) cube([170,170,65], true);

        }
        translate([0,150,0]) rotate([90,0,0]) linear_extrude(150) Roxy();
        rotate([90,0,90]) linear_extrude(150) Saty();
      }
} else {
    difference() {
      for (a = [15:20:150])
        intersection() {
           guia(a);
          translate([75,75,22]) cube([170,170,65], true);
        }
        translate([0,150,0]) rotate([90,0,0]) linear_extrude(150) Roxy();
        rotate([90,0,90]) linear_extrude(150) Saty();
    }
  }
}
/*
module hcore () translate([0,35,0]) rotate([0,45,0]) {
    intersection() {
        union() {
            translate([10,0,0]) cylinder(20,10,10);
            intersection() {
                translate([-15,0,0]) cylinder(20,35, 35);
                translate([0,-70,0]) cube([40,70,20]);
            };
        }
        rotate([0,-45,0]) translate([0,-35,0]) cube([40,50,1]);
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


if ((sec == 0 && cor == 0) ||  cor == 1) color("blue") translate([0,150,0]) rotate([90,0,0]) core1();
if ((sec == 0 && cor == 0) ||  cor == 2) color("red") translate([50,100,0]) rotate([90,0,0]) core2();
if ((sec == 0 && cor == 0) ||  cor == 3) color("green") translate([40,110,0]) rotate([90,0,0]) core3();


if ((sec == 0 && cor == 0) ||  cor == 4) color("cyan") translate([80,70,0]) rotate([90,0,-90]) core1();
if ((sec == 0 && cor == 0) ||  cor == 5) color("pink") translate([40,110,0]) rotate([90,0,-90]) core2();
if ((sec == 0 && cor == 0) ||  cor == 6) color("lime") translate([80,70,0]) rotate([90,0,-90]) core3();
*/