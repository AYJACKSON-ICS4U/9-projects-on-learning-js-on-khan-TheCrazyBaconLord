//wooden table
background(186, 145, 20);

//plate
fill(210, 210, 210);
ellipse(200, 200, 350, 350);
ellipse(200, 200, 300, 300);

//egg
rotate(40);
fill(255, 255, 255);
noStroke();
ellipse(300, 75, 203, 141); //white

rotate(-40);
fill(189, 189, 0);
noStroke();
rotate(30);
ellipse(298, 129, 65, 60); //the thingy on the yolk

rotate(-30);
fill(245, 245, 0);
noStroke();
ellipse(192, 258, 65, 60); //the yolk

fill(255, 255, 255);
ellipse(185, 236, 7, 7);
noFill();
stroke(255, 255, 255);
strokeWeight(5);
arc(193, 259, 50, 50, -189, -137); //the other thingy on the yolk

//pizza
fill(255, 222, 36);
strokeWeight(20);
stroke(230, 200, 49);
arc(206, 152, 200, 200, 181, 254); //crust

noStroke();
triangle(185, 62, 321, 198, 118, 152); //pizza slice

fill(255, 64, 0);
ellipse(154, 107, 25, 25);
ellipse(201, 112, 25, 25);
ellipse(140, 131, 25, 25);
ellipse(175, 131, 25, 25);
ellipse(237, 139, 25, 25);
ellipse(206, 152, 25, 25);
ellipse(240, 167, 25, 25);
ellipse(269, 170, 25, 25);
ellipse(181, 88, 25, 25); //pepperoni

//grapes
stroke(0, 0, 0);
strokeWeight(1);
fill(200, 0, 255);
ellipse(281, 219, 20, 20);
ellipse(297, 219, 20, 20);
ellipse(312, 219, 20, 20);
ellipse(327, 219, 20, 20);
ellipse(289, 232, 20, 20);
ellipse(305, 232, 20, 20);
ellipse(320, 232, 20, 20);
ellipse(297, 245, 20, 20);
ellipse(313, 245, 20, 20);
ellipse(304, 256, 20, 20);

//cookie
noStroke();
fill(255, 172, 48);
ellipse(307, 119, 70, 70); //the cookie

fill(66, 40, 2);
ellipse (294, 100, 8, 8);
ellipse (316, 105, 8, 8);
ellipse (292, 135, 8, 8);
ellipse (283, 118, 8, 8);
ellipse (297, 120, 8, 8);
ellipse (327, 134, 8, 8);
ellipse (308, 140, 8, 8);
ellipse (313, 117, 8, 8);
ellipse (329, 120, 8, 8); //chocolate chips

//text
fill(0, 0, 0);
textSize(13);
text("This person is eating an egg, a pizza, some grapes, and a cookie for dinner. Because why not?", 5, 6, 182, 100);
