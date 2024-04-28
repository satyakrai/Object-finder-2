status="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function Start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects.";
    objects_detected=documet.getElementById("status_objects").innerHTML="Number of Objects Detected Are:"+objects_detected;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function draw(){
    image(video,0,0,480,380);
}