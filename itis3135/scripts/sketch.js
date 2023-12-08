function setup() {
    createCanvas(1920, 1080);
  }
  
  function draw() {
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 80, 80);
    }
  }