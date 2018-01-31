
var xPos = 0;
var yPos = 0;
var xPos2 = 400;
var yPos2 = 0;

draw = function() {
    xPos += 5;
    yPos += 5;
    xPos2 -= 5;
    yPos2+= 5;
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    rect(xPos2, yPos2, 60, 60);
};
