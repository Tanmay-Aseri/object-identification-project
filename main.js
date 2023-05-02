img ="";

function draw(){
    image(img, 0, 0, 600, 500);

    fill("#FF0000");
    text("Pan", 190, 60);
    noFill();
    stroke("#FF0000");
    rect(185, 50, 120, 150);
    fill("#FF0000");
    text("Plant", 340, 220);
    noFill();
    stroke("#FF0000");
    rect(330, 200, 120, 100);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
  img = loadImage("modern-kitchen.jpg");
}