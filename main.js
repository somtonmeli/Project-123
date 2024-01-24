function preload()
{

}

function setup()
{
    canvas = createCanvas(500,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(500,550);
    video.position(30,100);

    posNet = ml5.posNet(video,modelLoaded);
    posNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("The model has Loaded");
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    
}