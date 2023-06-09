img ="";
status = "";
object = [];

function draw(){
    image(img, 0, 0, 600, 500);

    if(status != ""){

      for(i = 0; i < object.length; i++){
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000");
        percent = floor(object[i].confidence*100);
        text(object[i].label+" "+percent,object[i].x +15, object[i].y+15); 
        noFill();
        stroke("#FF0000");
        rect(object[i].x, object[1].y, object[i].width, object[i].height);  
      }
}
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
  img = loadImage("modern-kitchen.jpg");
}

function modelLoaded(){
  console.log("Model Loaded !");
  status = true;
  objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
  if(error){
    console.log(error);

  }

  console.log(results);
  object = results;
}