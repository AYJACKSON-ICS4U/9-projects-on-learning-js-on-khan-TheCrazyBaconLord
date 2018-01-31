var bodyX = 200;
var bodyY = 220;
var bodyW = 95;
var bodyH = bodyW * 2/3;
var fillR = 240;
var fillG = 209;
var fillB = 36;
var eyeSize = 5;


draw = function() {
    
    background(207, 254, 255);
    
    //the ground
    noStroke();
    fill(255, 255, 255);
    rect(0, 250, 400, 150);
    
    //feet
    fill(255, 115, 0);
    triangle(bodyX-55, bodyY+65, bodyX-12, bodyY+60, bodyX-7, bodyY+36);
    triangle(bodyX+55, bodyY+65, bodyX+12, bodyY+60, bodyX+7, bodyY+36);
    
    //body
    fill(30, 0, 120);
    ellipse(bodyX, bodyY, bodyW, 106);
    fill(60, 0, 240);
    ellipse(bodyX, bodyY, bodyW-15, 106);
    fill(255, 255, 255);
    ellipse(bodyX, bodyY, bodyW-30, 90);
    
    //head
    fill(30, 0, 120);
    ellipse(bodyX, bodyY-53, bodyH, 49);
    fill(60, 0, 240);
    ellipse(bodyX, bodyY-50, bodyH-10, 49);
    fill(255, 255, 255);
    ellipse(bodyX, bodyY-47, bodyH-15, 45);
    
    //face
    fill(0, 0, 0);
    ellipse(bodyX-12, bodyY-48, eyeSize, eyeSize);
    ellipse(bodyX+12, bodyY-48, eyeSize, eyeSize);
    fill(255, 115, 0);
    triangle(bodyX-6, bodyY-41, bodyX, bodyY-25, bodyX+6,  bodyY-41);
    
    //wings
    rotate(-65);
    fill(30, 0, 120);
    ellipse(-130, 232, 80, 20);
    rotate(78);
    ellipse(298, 126, 80, 20);
    
    eyeSize++;
};
