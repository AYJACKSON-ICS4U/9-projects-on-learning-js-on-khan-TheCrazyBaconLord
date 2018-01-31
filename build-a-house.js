//drawing the blue sky
background(219, 255, 255);

//drawing grass
noStroke();
fill(0, 255, 0);
rect (0, 300, 400, 100);

//drawing stripes on the grass
fill(0, 240, 0);
for (var k = 0; k <= 400; k += 80) {
    rect(k, 300, 40, 100);
}

//roof
fill(125, 125, 125);
rect(267, 57, 30, 100);
fill(120, 80, 20);
triangle(200, 28, 350, 150, 50, 150);

//front of house
fill(255, 255, 255);
rect(57, 150, 287, 211);

//brick pattern
fill(255, 0, 0);
noStroke();
for (var i = 59; i < 341; i += 22) {
    for (var j = 152; j < 351; j += 22) {
        rect(i, j, 20, 10);
    }
}

for (i = 69; i < 320; i += 22) {
    for (j = 163; j < 342; j += 22) {
        rect(i, j, 20, 10);
    }
}

for (i = 163; i < 358; i += 22) {
    rect (58, i, 9, 10);
    rect (333, i, 11, 10);
}

//windows
stroke(0, 0, 0);


for (i = 77; i < 300; i += 100) {
    for (j = 189; j < 300; j += 100) {
        stroke(120, 80, 20);
        fill (122, 235, 255);
        strokeWeight(5);
        rect(i, j, 50, 40);
        rect(i, j + 20, 25, 20);
        rect(i + 25, j, 25, 20);
    }
}

//door
strokeWeight(5);
fill(120, 80, 20);
rect(177, 278, 50, 81);
