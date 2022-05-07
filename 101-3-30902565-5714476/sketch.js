/*

Officer: 5714476
CaseNum: 101-3-30902565-5714476

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Spring Green filled rectangle with a Light Sea Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Orchid filled
rectangle with a Medium Orchid outline around him.

Identify the man reading the newspaper by drawing a Green filled rectangle
with a Teal outline around him.

Identify the woman with the dog by drawing a Sienna filled rectangle with a
Navy outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    fill(0, 255, 127,100);
    stroke(32, 178, 170);
    rect(1602,267,390,780);
    
    fill(153,50,204,100);
    stroke(186,  85, 211);
    rect(431,526,380,485);
    
    fill(0,128,0,100);
    stroke(0, 128, 128);
    rect(1130,313,180,340);

    
    fill(160, 82, 45,100);
    stroke(0, 0, 128);
    rect(1343,257,200,400)

}
