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

intersection() {
    translate([0,150,0]) rotate([90,0,0]) linear_extrude(150) Roxy();
    rotate([90,0,90]) linear_extrude(150) Saty();
    translate([75,75,0]) cylinder(50,80,80);
}


