/*

Officer: 5714476
CaseNum: 303-2-97547743-5714476

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make SecretSafeKey_0 equal to the value of mouseY
	- Use the 'min' function to prevent SecretSafeKey_0 from going above 14

	Whilst the mouse is being dragged:
	- Increment SecretSafeKey_1 by 2
	- Use the 'min' function to prevent SecretSafeKey_1 from going above 20

	When the mouse button is released:
	- Make SecretSafeKey_2 equal to the value of mouseY
	- Use the 'min' function to prevent SecretSafeKey_2 from going above 19

	When any key is pressed:
	- Increment SecretSafeKey_3 by 3
	- Use the 'constrain' function to prevent SecretSafeKey_3 from falling below 3 and going above 17

	When the mouse button is pressed:
	- Make SecretSafeKey_4 equal to the value of mouseX
	- Use the 'constrain' function to prevent SecretSafeKey_4 from falling below 10 and going above 72



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var SecretSafeKey_0;
var SecretSafeKey_1;
var SecretSafeKey_2;
var SecretSafeKey_3;
var SecretSafeKey_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecretSafeKey_0 = 0;
	SecretSafeKey_1 = 0;
	SecretSafeKey_2 = 0;
	SecretSafeKey_3 = 0;
	SecretSafeKey_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased(){
	SecretSafeKey_0 = min(14,mouseY);
	SecretSafeKey_2 = min(19,mouseY);
}

function mouseDragged(){
	SecretSafeKey_1 = min(20,(SecretSafeKey_1+2));
}

function keyPressed(){
	SecretSafeKey_3 = constrain(SecretSafeKey_3+3,3,17);
}

function mousePressed(){
	SecretSafeKey_4 = mouseX
	SecretSafeKey_4 = constrain(mouseX,10,72);

}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,SecretSafeKey_0, 20);
	pop();

	push();
	translate(120,380);
	drawDial(140,SecretSafeKey_1, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,SecretSafeKey_2, 24);
	pop();

	push();
	translate(280,380);
	drawDial(140,SecretSafeKey_3, 22);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecretSafeKey_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
