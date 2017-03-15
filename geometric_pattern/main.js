var NUM_CIRCLES = 12;
var circleDiameter;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}

function draw() {
    ellipse(0,height/2, circleDiameter, circleDiameter);
    ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
}