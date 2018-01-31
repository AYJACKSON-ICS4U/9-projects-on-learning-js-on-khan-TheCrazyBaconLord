//array of all the x positions of the raindrops, from 0 to 400 in intervals of 10
var xPositions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400];

//array of all the y positions of the raindrops
var yPositions = [10, 340, 360, 350, 120, 130, 50, 170, 220, 310, 320, 40, 330, 230, 140, 70, 300, 310, 290, 110, 100, 80, 190, 200, 210, 250, 270, 20, 370, 160, 380, 30, 150, 240, 60, 390, 280, 260, 180, 90];

draw = function() {
    background(204, 247, 255);
    
    //for loop that runs as many times as there are raindrops
    for (var i = 0; i < xPositions.length; i++) {
        
        //draw raindrop
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        
        //change y position of raindrop
        yPositions[i] += 15;
        
        //once the raindrop falls off the screen, set its y position back to 0
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
    
};
