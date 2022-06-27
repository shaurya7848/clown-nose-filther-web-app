nosex = 0;
nosey = 0;

function preload() 
{
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() 
{
   canvas =  createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNET = ml5.poseNet(video,modelLoaded);
    poseNET.on('pose',gotPoses);
}

function modelLoaded() 
{
console.log('Posenet is initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}

function draw() 
{
image(video,0,0,300,300);
image(clown_nose,nosex-15,nosey-15,30,30)
}

function take_snapshot()
{
    save("myfilterimage.png");
}