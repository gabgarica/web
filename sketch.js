function setup() {
  let canvas;
  canvas=createCanvas(400, 400);
  canvas.parent ("project");
  background('rgb(193,193,214)');
}
//add on ltr
function draw() {
  
}

function mousePressed() {
  drawFlower(mouseX, mouseY);
}

function drawFlower(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(random(['white', 'rgb(32, 27, 59)', 'rgb(209, 68, 169)', 'rgb(144,50,169)']));
  let numPetals = 9;
  for (let i = 0; i < numPetals; i++) {
    ellipse(0, 40, 20, 80);
    rotate(TWO_PI / numPetals);
  }
  
  fill(random(['orange', 'gold', 'coral']));
  ellipse(0, 0, 30, 30);
  pop();
}

// reset bg
function keyPressed() {
  if (key === ' ') {
    background('rgb(193,193,214)');
  }
}