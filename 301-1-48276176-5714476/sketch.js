/*
The case of the Python Syndicate
Stage 2


Officer: 5714476
CaseNum: 301-1-48276176-5714476

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var bonesKarpinskiImage;
var annaKarpinskiImage;
var rockyKrayImage;
var robbieKrayImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;


var annaKarpinskiLocX = 408;
var annaKarpinskiLocY = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiImage, annaKarpinskiLocX, annaKarpinskiLocY);

	image(bonesKarpinskiImage, annaKarpinskiLocX-293, annaKarpinskiLocY);
	image(rockyKrayImage, annaKarpinskiLocX+293, annaKarpinskiLocY);
	image(robbieKrayImage, annaKarpinskiLocX-293, annaKarpinskiLocX-99);
	image(pawelKarpinskiImage, annaKarpinskiLocX, annaKarpinskiLocX-99);
	image(cecilKarpinskiImage, annaKarpinskiLocX+293, annaKarpinskiLocX-99);

}