fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

//random number between 1 and 5. I named the variable muffins because I felt like it.
var muffins = random(1, 5);

//round the random number to an integer
var answer = round(muffins);

//outputting different answers depending on the random number. click restart to get a new answer
if (answer === 1) {
    text("    ASK", 176, 200);
    text("AGAIN LATER", 159, 229); 
}
else if (answer === 2) {
    text("YES", 189,227);
}
else if (answer === 3) {
    text("NO", 188,224);   
}
else if (answer === 4) {
    text("SERIOUSLY?", 163,200);
    text("THAT'S YOUR", 158,225);
    text("QUESTION?", 162, 250);
}
else if (answer === 5) {
    text("HOW SHOULD", 160,224);
    text("I KNOW?", 176,250);
}
