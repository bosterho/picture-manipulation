let img
function preload() {
  img = loadImage("assets/garden.jpg")
}

function setup() {
  createCanvas(4032 / 10, 3024 / 10);
  image(img, 0, 0, width, height)
}

function draw() {
  for (let i = 0; i < 1000; i++) {
    let v = createVector(random(width), random(height))
    let px = get(v.x, v.y)
    fill(px)
    noStroke()
    circle(v.x, v.y, 2)
  }
}

function mouseDragged(){
  // for (let i = 0; i < 10; i++) {
  //   let v = createVector(mouseX + random(-10, 10), mouseY + random(-10, 10))
  //   let px = get(v.x, v.y)
  //   fill(px)
  //   noStroke()
  //   circle(v.x, v.y, 5)
  // }
}
