module hcore () translate([0,35,0]) {
    translate([10,0,0]) cylinder(1,10,10);
    intersection() {
        translate([-15,0,0]) cylinder(1,35, 35);
        translate([0,-70,0]) cube([40,70,1]);
    };
}

module core1 () intersection() {
    hcore();
    cube([10,50,1]);
}

module core2 () intersection() {
    hcore();
    translate([10,0,0]) cube([10,50,1]);
}

core1();
translate([0,0,10]) core2();

//module core1 () {
//    intersection () {
//        hcore();
//        translate([-20,-40,0]) cube([10,50,20]);
//    }
//}
//module core2 () {
//    intersection () {
//        hcore();
//        translate([-10,-40,0]) cube([10,50,20]);
//    }
//}
//
//module coreL () intersection() {
//    hcore();
//    rotate([0,45,0]) translate([-30,-40,0]) cube([30,50,1]);
//}
//module coreR () mirror([1,0,0]) coreL();
//
//module coreLL () intersection() {
//    coreL();
//    translate([-20,-40,0]) cube([10,50,20]);
//}    
//
//module coreLC () intersection() {
//    coreL();
//    translate([-10,-40,0]) cube([10,50,20]);
//}    
//
//module coreRR () intersection() {
//    coreR();
//    translate([10,-40,0]) cube([10,50,20]);
//}
//module coreRC () intersection() {
//    coreR();
//    translate([0,-40,0]) cube([10,50,20]);
//}
////coreLL();
////coreLC();
////coreRC();
////coreRR();
//
