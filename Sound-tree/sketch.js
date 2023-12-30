let fr_ig = 0;

let img1;
let img2;
let img3;
let img4;



let rd = [];
let rd2 = [];
let count = 0;
let px;
let py;


let n = 0;
let R, G, B;





let newPointx;
let newPointy;
let thick = 10;
let thickmin=0;
let arrlen = 10
let pointx =[arrlen];
let pointy =[arrlen];
let mic;
let turn=true;
let tree1first=true;
let tree2first=true;

function preload(){
  img1 = loadImage('1.jpg');
  img2 = loadImage('2.jpg');
  img3 = loadImage('3.jpg');
  img4 = loadImage('4.jpg');
  //image(img1,0,0);
}


function setup() {
  
  frameRate(30);
  createCanvas(1200, 800);
  image(img1,0,0);
  //background(0);
  angleMode(DEGREES)
  
  
  
  mic = new p5.AudioIn();
  mic.start();
   
  fft = new p5.FFT(); // create FFT analyzer
  fft.setInput(mic);
  let spectrum = fft.analyze()
  

    for (let i=100; i<600; i++) {
      rd[i] =random(10,25);
  }
      for (let i=100; i<600; i++) {
      rd2[i] =random(50,100);
  }
  
}

function draw() {

    if (mouseIsPressed) {
      makeleaves()
    
  }

  

  //ellipse(position[0],position[1],10,10);
  if(turn==true)
    {
      if(tree1first==true)
        {
          thickmin=0;
          let position = getPosition();
          for(i=0; i<arrlen;i++)
          {
            pointx[i]=position[0];
            pointy[i]=position[1];
            stroke(70,60,20);
            strokeWeight(thick);
            
          }
          line(position[0],position[1], position[0],position[1]+100);
          tree1first=false;
        }
     
      else{
      
      turn =tree1();
      if(turn==false)
        {
          tree2first=true;
       
      }
      }
      
    }
  else
    {
      
      if(tree2first==true)
        {
          let position2 = getPosition();
          px=position2[0];
          py=position2[1];
          count=0;
          tree2first=false;
        }
      
      
      turn = tree2();
      if(turn==true)
        {
          tree1first=true;
        }
    }
  
  
}

function getPosition()
{
  if(n==0){
  return [random(100,1000),random(500,700)];
 
  }
  else if(n==1){
    return [random(100,700),random(200,700)];
  }
    else if(n==2){
    return [random(100,800),random(250,500)];
  }
  else{
    return [random(100,1000),random(400,700)];
  }
  
  
}

function tree1()
{
  //background(0);
  stroke(70,60,20);
  fill(255);
  strokeWeight(thick-thickmin);
  
  if(thickmin>thick)
    {
      strokeWeight(0);
      return false;
    }
  
  
  thickmin= thickmin+0.1;
  micLevel = mic.getLevel();
  let plusValue = map(micLevel, 0, 1, 0.2, 2);
  
  for(i=0; i<arrlen;i++)
    {
      if(i%2==0)
        {
          newPointx = pointx[i]-plusValue*i*random(0,0.5);
          newPointy = pointy[i]-1.3+i*0.05;
          //changeSeason();
          line(pointx[i], pointy[i], newPointx, newPointy);
          pointx[i]= newPointx;
          pointy[i] = newPointy;
        }
      else
        {
          newPointx = pointx[i]+plusValue*i*random(0,0.5);
          newPointy = pointy[i]-1.3+i*0.05;//마지막 숫자 늘릴 수록 동그래짐
          
          line(pointx[i], pointy[i], newPointx, newPointy);
          pointx[i]= newPointx;
          pointy[i] = newPointy;
        }
      
      
      
    }
  return true;
  
}

function keyPressed() {
  if (key == " ") {
    if (n == 0 || n == 1 || n == 2) {
      n++;
    } else if (n == 3) {
      n = 0;
    }
  }

  resetMatrix();
  if(n==0){
    image(img1,0,0);
  }
  else if(n==1){
    image(img2,0,0);
  }
  else if(n==2){
    image(img3,0,0);
  }
  else{
    image(img4,0,0);
  }

}






 function branch(len,a){    
   let spectrum = fft.analyze()
  let y = map(spectrum[a], 0, 255, 100, 0);
   push()
   if (len>y){
     strokeWeight(map(len,10,100,1,8))
     stroke(70,60,20)   
     line(0,0,0,-len)
     translate(0,-len)     
     rotate(-30)
     branch(len * 0.7,a)
     rotate(60)
     branch(len * 0.7,a)
   }
   pop()
 }


function tree2(){
  count++;
  
  if(count>100){
    return true;
    }
  strokeWeight(15)
  stroke(70,60,20)
  line(px,py,px,py+100)
  translate(px,py)
  rotate(-60)    
  for(b=0;b<450;b+=30){
    
    branch(rd2[b],b)
    strokeWeight(15)    
    rotate(rd[b]/2)
  }
  //noStroke()
  return false;
}

function makeleaves()
{

    fr_ig++;
    if(fr_ig%3!=0)
      {
        return;
      }
  
  
  strokeWeight(1);
    let size = random(10, 20);
    ellipseMode(CENTER);
    for (let cnt = 0; cnt < 10; cnt++) {
      let a = random(-30, 30);
      let b = random(-30, 30);
      let r = random(0, 1);
      fill(R, G, B);
      if (r <= 0.33) {
        R = 255;
        G = 144;
        B = 185;
      } else if (r <= 0.66) {
        R = 255;
        G = 177;
        B = 195;
      } else {
        R = 255;
        G = 112;
        B = 107;
      }
      if (n == 0) {
        stroke(214, 65, 59);
        if (r <= 0.33) {
          R = 255;
          G = 144;
          B = 185;
        } else if (r <= 0.66) {
          R = 255;
          G = 177;
          B = 195;
        } else {
          R = 255;
          G = 112;
          B = 107;
        }
      } else if (n == 1) {
        stroke(26, 124, 38);
        if (r <= 0.33) {
          R = 160;
          G = 255;
          B = 224;
        } else if (r <= 0.66) {
          R = 0;
          G = 196;
          B = 23;
        } else {
          R = 27;
          G = 204;
          B = 138;
        }
      } else if (n == 2) {
        stroke(165, 97, 0);
        if (r <= 0.33) {
          R = 188;
          G = 36;
          B = 36;
        } else if (r <= 0.66) {
          R = 255;
          G = 112;
          B = 18;
        } else {
          R = 255;
          G = 205;
          B = 18;
        }
      } else if (n == 3) {
        noStroke();
        noFill();
      }
      push();
      translate(mouseX + a, mouseY + b);
      rotate(random(-90, 90));
      ellipse(0, 0, size, size + random(5, 10));
      line(0, 0, 0, 20);
      pop();
      
      
    }

}