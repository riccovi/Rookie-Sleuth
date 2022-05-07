/*
The case of the Python Syndicate
Stage 1

Officer: 5714476
CaseNum: 301-0-57667834-5714476

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var lina_lovelace_image;
var robbie_kray_image;
var countess_hamilton_image;
var bones_karpinski_image;
var pawel_karpinski_image;
var anna_karpinski_image;



//declare your new variables below
var countess_hamilton_location_x = 701;
var countess_hamilton_location_y = 40;
var lina_lovelace_location_x = 115;
var lina_lovelace_location_y = 40;
var robbie_kray_location_x = 408;
var robbie_kray_location_y = 40;
var bones_karpinski_location_x = 115;
var bones_karpinski_location_y = 309;
var pawel_karpinski_location_x = 408
var pawel_karpinski_location_y = 309;
var anna_karpinski_location_x = 701;
var anna_karpinski_location_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	lina_lovelace_image = loadImage("lina.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_image, countess_hamilton_location_x, countess_hamilton_location_y);

	image(lina_lovelace_image, lina_lovelace_location_x, lina_lovelace_location_y);
	image(robbie_kray_image, robbie_kray_location_x, robbie_kray_location_y);
	image(bones_karpinski_image, bones_karpinski_location_x, bones_karpinski_location_y);
	image(pawel_karpinski_image, pawel_karpinski_location_x, pawel_karpinski_location_y);
	image(anna_karpinski_image, anna_karpinski_location_x, anna_karpinski_location_y);

}