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
    translate([a,a,40]) rotate([0,0,-45]) cube([180,1,80],center = true);
}

intersection() {
    translate([0,150,0]) rotate([90,0,0]) linear_extrude(150) Roxy();
    rotate([90,0,90]) linear_extrude(150) Saty();
    for (a = [15:20:150]) guia(a); 
}


module hcore () {
    translate([-10,0,0]) cylinder(20,10,10);
    intersection() {
        translate([15,0,0]) cylinder(20,35, 35);
        translate([-40,-70,0]) cube([40,70,20]);
    };
}

module core1 () {
    intersection () {
        hcore();
        translate([-20,-40,0]) cube([10,50,20]);
    }
}
module core2 () {
    intersection () {
        hcore();
        translate([-10,-40,0]) cube([10,50,20]);
    }
}

module coreL () intersection() {
    hcore();
    rotate([0,45,0]) translate([-30,-40,0]) cube([30,50,1]);
}
module coreR () mirror([1,0,0]) coreL();

module coreLL () intersection() {
    coreL();
    translate([-20,-40,0]) cube([10,50,20]);
}    

module coreLC () intersection() {
    coreL();
    translate([-10,-40,0]) cube([10,50,20]);
}    

module coreRR () intersection() {
    coreR();
    translate([10,-40,0]) cube([10,50,20]);
}
module coreRC () intersection() {
    coreR();
    translate([0,-40,0]) cube([10,50,20]);
}
coreLL();
coreLC();
coreRC();
coreRR();


