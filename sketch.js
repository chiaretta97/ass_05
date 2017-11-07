var mySong;

function preload() {
 mySong = loadSound('./assets/karma.mp3');

 myImg = loadImage('./assets/mucca.jpg');
 //myImgg = loadImage("biancoenero.jpg");
}

function setup() {
  createCanvas(500,500)
  mySong.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  background(229,43,80);
  
  
  if (mySong.isPlaying() === true) {
   var volume = analyzer.getLevel();
   
  fill(lerpColor(color(255),color(0),volume*500))
   if (volume > 0.1){
   fill(color(255,255,255))
   stroke(0);
   image(myImg, 0, 0, 500, 500)
   
   } else {
    
   fill(color(0,0,0))
   stroke(229,43,80);
   myImg.filter("invert")
   image(myImg, 0, 0, 500, 500)
  
   }
   var size = map(volume,0,0.2,0,12)
   polygon(size*16, size*16, size*7 , size)
   
   var sized = map(volume,0,0.2,0,6)
   polygon(sized*10, sized*80, sized*8 , sized)
   
 
   }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

