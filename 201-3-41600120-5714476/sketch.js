/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5714476
CaseNum: 201-3-41600120-5714476

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(641,101);
    vertex(604,113);
    vertex(554,169);
    vertex(488,326);
    vertex(448,301);
    vertex(376,354);
    vertex(395,385); //7
    vertex(439,369);
    vertex(484,484);
    vertex(566,498); //10
    vertex(622,470);
    vertex(697,518);
    vertex(723,500);
    vertex(708,459);
    vertex(591,411);
    vertex(737,136);
    vertex(641,101);
    endShape();
}
