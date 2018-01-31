//Click anywhere to draw fishes!


background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

//drawing the rocks at the bottom of the fish tank
var numberOfRocks = 0;
draw = function() {
    
    //random variables that will determine the
    //location and colour of the rocks
    var randomX = random(0, 400);
    var randomY = random(300, 400);
    var randomFillR = random(70, 80);
    var randomFillG = random(70, 80);
    var randomFillB = random(70, 80);
    
    stroke(0, 0, 0);
    
    //stopping the draw thingy once the
    //number of rocks reaches 1000
    if (numberOfRocks <= 1000) {
        
        //drawing the rocks
        fill(randomFillR, randomFillG, randomFillB);
        ellipse(randomX, randomY, 50, 20);
        numberOfRocks++;
    }
    
};

//draws a fish wherever the user clicks their mouse
mouseClicked = function() {
    
    //choosing the fish size
    var width = random(50, 150);
    var height = random(30, 80);
    
    //choosing random colours for the fish
    var randomFillR = random(0, 255);
    var randomFillG = random(0, 255);
    var randomFillB = random(0, 255);
    
    //drawing the fish body
    noStroke();
    fill(randomFillR, randomFillG, randomFillB);
    ellipse(mouseX, mouseY, width, height);
    
    //eye
    fill(0, 0, 0);
    ellipse (mouseX + width/3, mouseY, 10, 10);
    
    //tail
    fill(randomFillR, randomFillG, randomFillB);
    triangle(mouseX-width/3, mouseY, mouseX-width/1.5, mouseY-height/2, mouseX-width/1.5, mouseY+height/2);
};
