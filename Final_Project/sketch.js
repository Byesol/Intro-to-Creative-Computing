const skyBlue = '#a8dbff';
let yoff = 0.0; // 
let bubbles = [];

let resolution = 150
let frameNum = 0;
let frames = [];
let visCells

let frames2 = [[]];
let frames3 = [[]];
let frames4 = [[]];
let frames5 = [[]];

let colors = [];
let colors2 = [];
let colors3 = [];

let chosenColor;
let chosenColor2;
let chosenColor3;

let ready =0;
let pressed = false;

let m=0;
let mo=0;
    
let makeNewFrame = false;

function preload(){
  song = loadSound("song.mp3");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
  
  
  for (let i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(width), random(400, 800));
  }
  frames.push(new Grid(resolution));
  colorMode(HSB,100);
  for(let i = 0; i<resolution; i++){
    colors.push(random(0,100));
  }
   for(let i = 0; i<resolution; i++){
    colors2.push(random(5,80));
  }
  for(let i = 0; i<resolution; i++){
    colors3.push(random(20,100));
  }
 
}

function draw() {
  background(skyBlue);
  if(m==0){
    
     ocean();
    sand();
    for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
      push()
  stroke(0)
  fill(0)
  textSize(30);
  text('objects ' + (frameNum+1),width-150,50);
  pop()
  
    push()
  stroke(0)
  fill(0)
  textSize(60);
  textAlign(CENTER);
  text('Make your own aquarium' ,width/2,150);
  pop()
  
   push()
  stroke(0)
  fill(0)
  textSize(30);  
  text('Press aroow keys to draw next objects.\nPress enter key when your drawing is finished. ' ,width/2-300,300);
  pop()
  
  push()
  stroke(0)
  fill(0)
  textSize(30);
  text('objects 1 : move to right \nobjects 2 : move to left\nobjects 3 : do not move ' ,width/2-200,400);
  pop()
  }
  else{
    mo++
    if(mo>width-100){
      mo=0;
    }
    ocean();
    sand();
     for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
      for(let i = 0; i< frames2[0].length; i++){
      frames2[0][i].draw2(frames3[0][i],frames4[0][i],frames5[0][i]);
          
    }
       for(let i = 0; i< frames2[1].length; i++){
      frames2[1][i].draw3(frames3[1][i],frames4[1][i],frames5[1][i]);
          
    }
    for(let i = 0; i< frames2[2].length; i++){
      frames2[2][i].draw(frames3[2][i],frames4[2][i],frames5[2][i]);
          
    }
  } 
  if(makeNewFrame){
    frames2.push([]);
    frames3.push([]);
    frames4.push([]);
    frames5.push([]);
    frames.push(new Grid(resolution));
    makeNewFrame = false;
  }
  frames[frameNum].drawPalette();
frames[frameNum].drawnCells();  
  
}

class Grid{
 constructor(resolution){
   this.res = resolution;
   this.cellWidth = width/this.res;
   this.cells = [];
   for(let i = 0; i<this.res; i++){
     this.cells.push([]);
     for(let j = 0; j<this.res; j++){
       // this.cells[i] = [];
       this.cells[i].push(new Cell(i*this.cellWidth,j*this.cellWidth,this.cellWidth));
     }
   }
 }
  drawPalette(){
    for(let j = 1; j<=resolution; j++){
    
       this.cells[0][j-1].draw(colors[j-1],colors2[j-1],colors3[j-1])
     }
  }
  drawnCells(){
      if(pressed){
        for(let i = 0; i<resolution; i++){
      for(let j = 1; j<resolution; j++){
      if(mouseY > i*this.cellWidth && mouseY < (i+1)*this.cellWidth && mouseX > j*this.cellWidth && mouseX < (j+1)*this.cellWidth){
       
        frames2[frameNum].push(this.cells[j][i]);
        frames3[frameNum].push(chosenColor)
        frames4[frameNum].push(chosenColor2)
        frames5[frameNum].push(chosenColor3)
        print(chosenColor)
      }
    }
    }
  }
    if(m==0){
    
    for(let i = 0; i< frames2[frameNum].length; i++){
      frames2[frameNum][i].draw(frames3[frameNum][i],frames4[frameNum][i],frames5[frameNum][i]);
          
    }
    }
  
  }
}

class Bubble {
  constructor(tempx, tempy) {
    this.x = tempx;
    this.y = tempy;
    this.size = random(5, 10);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    this.x += random(-4, 4);
    this.y += random(-5, -3);
    if (this.y < 0) {
      this.y = random(height-200, height -100);
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }

  show() {
    stroke(skyBlue);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x + 10, this.y + 10, this.size, this.size);
  }
}

class Cell{
  constructor(x,y,width){
    this.color = 0;
    this.color2 = 0;
    this.color3 = 0;
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw(color,color2,color3){
    fill(color,color2,color3);
    noStroke()
    rect(this.x,this.y,this.width,this.width);   
  }
   draw2(color,color2,color3){
    fill(color,color2,color3);
    noStroke()        
     rect(this.x+mo,this.y,this.width,this.width);
    
  }
     draw3(color,color2,color3){
    fill(color,color2,color3);
    noStroke()
    rect(this.x-mo,this.y,this.width,this.width);  
  }
}

function ocean() {
  

  //waves
  push();
  fill(50, 60, 67);
  noStroke();

 
  beginShape();

  let xoff = 0; 

  for (let x = 0; x <= width; x += 10) {
  

  
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);


    vertex(x, y);
  
    xoff += 0.05;
  }


  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  pop();
}

function keyPressed() {
  if(keyCode == ENTER){
    if(ready>1){
    m=1;
    }
  }
  if (keyCode === LEFT_ARROW) {
    if(frameNum > 0) frameNum--;
  } else if (keyCode === RIGHT_ARROW) {
   if(frameNum == frames.length-1){
     makeNewFrame = true;
     if(frameNum<2){
       ready++;
     frameNum++;
     }
   
   }
    
    else{
        if(frameNum<2){
     frameNum++;
          ready++;
     }
     
    } 
  
  }
}
function mousePressed(){
  let width1 = width/resolution;
  if(mouseX<width1){
    for(let i = 0; i<resolution; i++){
      if(mouseY > i*width1 && mouseY < (i+1)*width1){
        chosenColor = colors[i];
        chosenColor2 = colors2[i];
        chosenColor3 = colors3[i];
      }
    }
  }
  if(mouseX>width1){
     pressed = true;
    }
}
function mouseReleased(){
  pressed = false;
}

function sand() {
  fill(10, 24, 52);
  noStroke();
  rect(0,height-150,width,150)
}