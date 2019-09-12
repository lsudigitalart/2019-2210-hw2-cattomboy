/**Brenna Rowan Project 2**/

function setup() {
  // put setup code here
   createCanvas(400,269);
   noLoop();
}

function draw() {
  // put drawing code here
  //background color (R:4,G:6,B:5)
  //grey lines: around R:220 G:220 B: 220
  //Red color: Around R:166,G:0,B:3
  //Blue color: Around R: 0,G:19,b:78
  g = color(220,220,220);
  r = color(166,0,3);
  b = color(0,19,78);
  //setting bg
  background(4,6,5);
  
  //drawing upper red lines 
  fill(r);
  quad(0,0,400,0,400,8,0,17);
  quad(0,25,400,15,400,32,0,41);
  quad(0,50,400,39,400,44,0,53);
  
  //grey lines n shapes
  fill(g);
  quad(42,56,75,269,108,269,74,56);
  quad(105,228,107,240,127,269,133,269);
  quad(102,204,103,216,139,269,146,269);
  
  beginShape();
  vertex(199,240);
  vertex(219,269);
  vertex(202,269);
  vertex(197,258);
  vertex(194,245);
  endShape(CLOSE);
  
  beginShape();
  vertex(284,164);
  vertex(374,269);
  vertex(326,269);
  vertex(294,228);
  vertex(296,216);
  vertex(273,187);
  endShape(CLOSE);
  
  //rect w: 26 l: 323
  //top left corner (77,55)
  //bottom left corner (84,84)
  /**ellipse(77,55,10); 
  rotate(-0.20);
  translate(84,84);
  rect(0,0,26,323); **/
  quad(77,55,400,50,400,76,79,66);
  
  //blue curves 
  
  
  
}