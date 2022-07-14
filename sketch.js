let img
function preload(){
  img = loadImage("assets/garden.jpg")
}

function setup() {
  createCanvas(4032 / 10, 3024 / 10);
  image(img, 0, 0, width, height)
}

function draw() {
  let v = createVector(random(width), random(height))
  let px = get(v.x, v.y)
  fill(px)
  noStroke()
  circle(v.x, v.y, 10)
}
