/*
The case of the Python Syndicate
Stage 4

Officer: 5714476
CaseNum: 301-3-10918634-5714476

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var countessHamiltonImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var robbieKrayImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;

var robbieKrayObj;
var countessHamiltonObj;
var annaKarpinskiObj;
var cecilKarpinskiObj;
var pawelKarpinskiObj;
var bonesKarpinskiObj;

//declare your new objects below


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObj = {
		x: 115,
		y: 309,
		image: robbieKrayImg
    };
    countessHamiltonObj = {
		x: 115,
		y: 40,
		image: countessHamiltonImg
    };
    annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImg
    };
    cecilKarpinskiObj = {
        x: 701,
        y: 40,
        image: cecilKarpinskiImg
    };    
    pawelKarpinskiObj = {
        x: 408,
        y: 309,
        image: pawelKarpinskiImg
    };
    bonesKarpinskiObj = {
        x: 701,
        y: 309,
        image: bonesKarpinskiImg
    };
	}



	//define your new objects below

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);


}