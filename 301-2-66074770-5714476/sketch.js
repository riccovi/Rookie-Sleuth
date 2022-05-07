/*
The case of the Python Syndicate
Stage 3


Officer: 5714476
CaseNum: 301-2-66074770-5714476

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Bones karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rockyKrayImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var countessHamiltonImg;

var bonesKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImg = loadImage("krayBrothers1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 701,
		y: 40,
		image: bonesKarpinskiImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);

	image(rockyKrayImg, bonesKarpinskiObj.x-586, bonesKarpinskiObj.y);
	image(pawelKarpinskiImg, bonesKarpinskiObj.x-293, bonesKarpinskiObj.y);
	image(annaKarpinskiImg, bonesKarpinskiObj.x-586, bonesKarpinskiObj.x-392);
	image(cecilKarpinskiImg, bonesKarpinskiObj.x-293, bonesKarpinskiObj.x-392);
	image(countessHamiltonImg, bonesKarpinskiObj.x, bonesKarpinskiObj.x-392);

}