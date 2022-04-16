img = "";
status2 = "";
object = [];

function preload(){
    img = loadImage('waterbottle.png')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector( 'cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Dectecing Object";
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
        object = results;
    }
    
}

function draw(){
    image(img, 0, 0, 640, 420);

        if(status2 != ""){

            for(i = 0; i < object.length; i++){
                document.getElementById("status").innerHTML = "Status = Object Detected";

                fill("#660000");
                percent = floor(object[i].confidence * 100);
                text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
                noFill();
                stroke("#660000");
                rect(object[i].x, object[i].y, object[i].width, object[i].height);
            }
        }
}


