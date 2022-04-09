img = "";
status2 = "";

function preload(){
    img = loadImage('waterbottle.png')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecing Object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status2 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
    }
    
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#660000")
    text("WATER BOTTLE", 45, 75);
    text("84%", 145, 75);
    noFill();
    stroke("#660000");
    rect(30, 60, 550, 350);
}

function back(){
    
}