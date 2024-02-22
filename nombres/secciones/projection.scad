use <../bloques.scad>

for(p = [-80:40:80]) {
translate([0,2*p,0])
projection(cut=true) 
translate([0,0,p])
rotate([270,0,0])
rotate([0,0,-45])
RoxySatyNeg();
}
