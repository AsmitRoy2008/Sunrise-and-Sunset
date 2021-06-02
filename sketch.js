const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg ;

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    time = 0;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    text("Time : " + time, 20,50)


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    

    //change the data in JSON format
    var resJSON = await response.json();

    // write code slice the datetime
    var datetime = resJSON.datetime;
    var hour = datetime.slice(11,13);
    var timing = datetime.slice(11,16);
    console.log(timing);
    time = timing;

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 00 && hour <= 02)
    {
        bg = "sunrise12.png";
    }
    else if (hour >= 03 && hour <= 05)
    {
        bg = "sunrise1.png";
    }
    else if (hour >= 06 && hour <= 08)
    {
        bg = "sunrise2.png";
    }
    else if (hour >= 09 && hour <= 10)
    {
        bg = "sunrise3.png";
    }
    else if (hour > 10 && hour < 11)
    {
        bg = "sunrise4.png";
    }
    else if (hour >= 11 && hour <= 12)
    {
        bg = "sunrise5.png";
    }
    else if (hour >= 12 && hour <= 15)
    {
        bg = "sunrise6.png";
    }
    else if (hour >= 15 && hour <= 16)
    {
        bg = "sunset7.png";
    }
    else if (hour >= 17 && hour < 18)
    {
        bg = "sunset8.png";
    }
    else if (hour >= 18 && hour <= 19)
    {
        bg = "sunset10.png";
    }
    else if (hour >= 20 && hour <= 21)
    {
        bg = "sunset11.png";
    }
    else if (hour >= 22 && hour <= 00)
    {
        bg = "sunset12.png"
    }


    //load the image in backgroundImg variable here

     backgroundImg  = loadImage(bg);

    
  
}
