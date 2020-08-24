const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,g1,pig1,log1,pig2,box3,box4,log2,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1535,750);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,620,70,70);
    box2=new Box(920,320+300,70,70);
    g1=new ground(600,height,2000,20);
    pig1=new Pig (810,350+300);
    log1=new log (810,260+300,300,PI/2);
    pig2=new Pig (810,220+300);
    box3=new Box(700,240+300,70,70);
    box4=new Box(920,240+300,70,70);
    log2=new log (810,180+300,300,PI/2);
    box5=new Box(810,160+300,70,70);
    log3=new log (760,120+300,150,PI/6);
    log4=new log (870,120+300,150,-PI/6);
    bird1=new bird(100,100);
    boxa=new Box (400,620,70,70);
    boxb=new Box (470,620,70,70);
    boxc=new Box (400,550,70,70);
    boxd=new Box (470,550,70,70);
    boxe=new Box(400,480,70,70);
    boxf=new Box(470,480,70,70);
    log5=new log(435,440,210,PI/2);
    pigg=new Pig(435,390);
    logg=new log(380,350,60,PI/1);
    logog=new log(490,350,60,PI/1);
    log6=new log(435,345,210,PI/2);
log7=new log(1100,650,150,PI/1);
log8=new log(1400,650,150,PI/1);
boxg=new Box(1150,650,70,70);
boxh=new Box(1350,650,70,70);
pig3=new Pig(1250,650);
log9=new log(1250,600,250,PI/2);
bird1.rotation=24;



}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   g1.display();
   pig1.display();
   log1.display();
   pig2.display();
   box3.display();
   box4.display();
   log2.display();
   log3.display();
   log4.display();
   box5.display();
   bird1.display();
   boxa.display();
    boxb.display();
    boxc.display();
    boxd.display();
    boxe.display();
    boxf.display();
    log5.display();
    pigg.display();
    logog.display();
    logg.display();
    log6.display();
    log7.display();
    log8.display();
    boxg.display();
    boxh.display();
    pig3.display();
    log9.display();
    
}