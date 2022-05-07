module mU (x, y, r) {
    translate([x,y,0])
    rotate(r)
    union() {
        difference() {
            circle(15); 
            circle(5);
            translate([-15,0,0]) square(30);
        };
        translate([-15,0,0]) square(10);
        translate([-10,10,0]) circle(5);
        translate([5,0,0]) square(10);
        translate([10,10,0]) circle(5);
    };
};

module mPata(x, y, r) {
    translate([x,y,0])
    rotate(r) {
        translate([-5,0,0]) square([10,20]);
        translate([0,0,0]) circle(5);
    }
}
    
module R() {
    union() {
        mU(15,15,180);
        mU(15,35,90);
        translate([0,5,0]) square([10,45]);
    };
};
    
module O() {
    union() {
        mU(15,15,0);
        mU(15,35,180);
    };
};

module X() {
    union() {
        mU(15,35,0);
        mU(15,15,180);
    };
};

module Y() {
    union() {
        mU(15,35,0);
        mPata(15,5,0);
    };
};

module S() {
    union() {
        difference() {
            mU(15,35,-90);
            translate([15,20,0]) square([15,10]);
        }   
        difference() {
            mU(15,15,90);
            translate([0,20,0]) square([15,10]);
        }
    }
}

module A() {
    union() {
        translate([15,35,0]) difference() {
            circle(15);
            circle(5);
        }
        mU(15,15,180);
        translate([0,15,0]) square([10, 20]);
        translate([20,15,0]) square([10, 20]);
    };
};    

module T () {
    union() {
        mPata(15,5,0);
        mPata(25,45,90);
        mPata(5,45,-90);
        translate([10,20,0]) square([10,20]);
    }
}

module Roxy() {
    R();
    translate([40,0,0]) O();
    translate([80,0,0]) X();
    translate([120,0,0]) Y();
}
module Saty() {
    S();
    translate([40,0,0]) A();
    translate([80,0,0]) T();
    translate([120,0,0]) Y();
}

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
/*
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
*/
difference() {
    translate([75,75,22]) cube([160, 160, 65], true);
    translate([0,157,0]) rotate([90,0,0]) linear_extrude(170) Roxy();
    translate([-7,0,0]) rotate([90,0,90]) linear_extrude(170) Saty();
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