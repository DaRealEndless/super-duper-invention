video = "";

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
}

function draw() {
    image(video, 0, 0, 500, 500);
}

function start(){
    objectDetect = ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("detector").innerHTML="Status:Detecting Objects <br>Please Be Patient :D"
}

function modelloaded(){
    console.log("Model has loaded ┗(＾0＾)┓");
    status = true;
    video.loop();
    video.volume(0);
    volume.speed(1);
}