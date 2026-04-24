
function setup() {
  let BackgroundCanvas = createCanvas(windowWidth, windowHeight); 
  //BackgroundCanvas.id('BackgroundCanvas');
 background(255,0,0);
console.log("canvas setup")

noStroke()
   
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let totalTime = 0
 
function draw() {
  const squaresPerRow = 50;
  const squareSize = width/squaresPerRow;

  let delta = deltaTime;
  totalTime += delta
  for(let x=0; x<width; x+=squareSize) { 
    for(let y=0; y<height; y+=squareSize) { 
      let brightness = Math.abs( ((x/10+y/5)+(totalTime*0.01))%510-255 )/255;//from 0 to 1
      brightness*=2//increase effectiveness
      brightness+=0.4//some sort of offset i guess idk
      fill(23*brightness,25*brightness,brightness*30);
      rect(x,y,squareSize,squareSize);
    }
  }
  
}
