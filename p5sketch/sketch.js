


var soundFile;
var amplitude;

var dropletVelocity = 25.0;
var dropletSize;
var initialBackgroundColor = 63; // the set background color
var backgroundColor = 55;

var rainDropsArray = [];

function preload() {
  soundFile = loadSound('audio/Thunder_Light_Rain.mp3');
  soundFile.isLoaded();
}

function setup() {
  // setting canvas size, and putting it inside a div id
  var canvas = createCanvas(400, 200);
  canvas.parent('defaultCanvas0');


  background(55);

  // soundFile.loop();
  soundFile.play();

  // create a new p5.Amplitude. Optionally, give it a 'smoothing' value betw 0.0 and .999
  amplitude = new p5.Amplitude();

  // build an array full of raindrops
  for (var i = 0; i < 50; i++) {
    var shade = int(random(80, 130));
    var locX = int(random(0, width));
    var locY = int(random(0, height));
    var size = int(random(5, 30));
    rainDropsArray[i] = new Droplet(size, shade, locX, locY, dropletVelocity);
  }
}


function draw() {
  background(backgroundColor);
  adjustBGColor(amplitude.getLevel());
  // console.log(amplitude.getLevel());

  for (var i = 0; i < rainDropsArray.length; i++) {
    rainDropsArray[i].update();
  }
}

// this function adjusted the background color based on the amplitude of the audio signal.
// Causing a lightning/thunder effect.
function adjustBGColor(amp) {

  if(amp < 0.1) {
    backgroundColor = int(map(amp, 0.0, 0.5, initialBackgroundColor, initialBackgroundColor + 20));
  } else {
    backgroundColor = int(map(amp, 0.0, 0.5, initialBackgroundColor, initialBackgroundColor + 50));
  }
}

// DROPLET CLASS ---------
function Droplet(_size, _shade, _locX, _locY, _velocity) {
  this.size = _size;
  this.shade = _shade;
  this.location = new p5.Vector(_locX, _locY);
  this.velocity = _velocity;

  this.update = function() {
    stroke(this.shade, 100);
    line(this.location.x, this.location.y, this.location.x, this.location.y + this.size);
    this.location.y += this.velocity;

    if (this.location.y > height) {
      this.location.y = 0;
      this.location.x = random(0, width);
    }
  }

}
