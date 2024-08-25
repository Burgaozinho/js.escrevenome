function setup() {
    createCanvas(600, 600);
   background("blue");}
  
  function draw() {
   
    stroke("purple");
    fill("yellow");
  
    //console.log(mouseIsPressed);
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 100, 50);
    }
  }  