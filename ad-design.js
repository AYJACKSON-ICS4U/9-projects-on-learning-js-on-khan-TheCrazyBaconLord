//drawing brown rectangle thingy
fill(156, 88, 0);
noStroke();
rect(80, 80, 240, 240);

//drawing multiple ellipses to make a target
fill(255, 255, 255);
strokeWeight(5);
stroke(255, 0, 0);
ellipse(200, 200, 200, 200);
ellipse(200, 200, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 200, 50, 50);

//writing numbers on the target
fill(0, 0, 0);
textSize(18);
text("10", 188, 106, 100, 100);
text("25", 188, 130, 100, 100);
text("50", 188, 157, 100, 100);
text("100", 183, 193, 100, 100);

//advertising text
fill(255, 0, 0);
textSize(30);
text("INFLATABLE DARTBOARD!!!", 5, 15, 400, 400);
textSize(20);
text("Perfect for throwing practice!", 233, 10, 170, 400);
textSize(35);
text("GET YOURS TODAY!!!!!", 10, 349, 400, 400);
