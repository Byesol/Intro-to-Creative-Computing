var img;
let cvalue=1;
let cnt =0;
let i = 600;

let q = 0;
let y_d,y_c,y_e,y_a;
let table, numcol, nulrow;
let total;
let p_d = [],p_c=[],p_e=[],p_a=[],p_ad=[];
let n_pd = [];
let col = ["#FF706D","#FFC107","#4274FF","#2CE8A0"]

let xl=280,petx=500,change=0;

let oblist = [{num:0}, {num:1}, {num:2}, {num:3}, {num:4}, {num:5}, {num:6}]
let rc, rm, rt = 0;
let clr = 100;
let clrList = [];
let cardList = [];
let num = 25;
let n;
let d = 10;
let card = [150, 100];
let x, y, cx, cy, cn, idx = -1, pidx, dt = [];

let f_img;


function preload() {
  img = loadImage("background3.jpg");
  img2 = loadImage("background4.jpg");
  img3 = loadImage("q.png");
  
  f_img = loadImage("finaltext.png");
  
  catSound = loadSound('./cat.mp3');
  dogSound = loadSound('./aa.mp3');
  
  imgr = loadImage("1111.png");
  imgl = loadImage("2222.png");
  pet = loadImage("3333.png");
  
  img1 = loadImage("11.png");
  table_d = loadTable("dog.csv","csv","header");
  table_c = loadTable("cat.csv","csv","header");
  table_e = loadTable("etc.csv","csv","header");
  table_a = loadTable("all.csv","csv","header");
  
   data = loadTable("an5.csv","csv","header");
  font = loadFont("EF_Diary.ttf");
  letter = loadImage("letter.jpg");
}
  
function setup() {
  createCanvas(img.width, img.height);
  canvas2 = createGraphics(1000, 800)
  catSound.loop(); 
  dogSound.loop();
  
  
  numcol = table_d.getColumnCount();
  numrow = table_d.getRowCount();
  for(let i=1;i<numcol;i++){
    total = table_d.getNum(0,0);
      n = (table_d.getNum(0,i)/total)*295;
    p_d[i-1] = n;
  }
   for(let j=1;j<numcol;j++){
     total = table_c.getNum(0,0);
      n = (table_c.getNum(0,j)/total)*295;
    p_c[j-1] = n;
  }
   for(let k=1;k<numcol;k++){
     total = table_e.getNum(0,0);
      n = (table_e.getNum(0,k)/total)*295;
    p_e[k-1] = n;
  }
   for(let l=1;l<numcol;l++){
     total = table_a.getNum(0,0);
      n = (table_a.getNum(0,l)/total)*295;
    p_a[l-1] = n;
  }
  
  for(let z=1;z<numcol;z++){
     total = table_a.getNum(0,0);
      n = (table_a.getNum(0,z)/total)*100;
    p_ad[z-1] = n;
  }
 
  n_pd[0] = p_ad[2];
  n_pd[1] = p_ad[1];
  n_pd[2] = p_ad[3];
  n_pd[3] = p_ad[0];
 
  pg_d1 = createGraphics(70,p_d[2]);
  pg_c1 = createGraphics(70,p_c[2]);
  pg_e1 = createGraphics(70,p_e[2]);
  pg_a1 = createGraphics(70,p_a[2]);
  
  pg_d2 = createGraphics(70,p_d[1]);
  pg_c2 = createGraphics(70,p_c[1]);
  pg_e2 = createGraphics(70,p_e[1]);
  pg_a2 = createGraphics(70,p_a[1]);
  
  pg_d3 = createGraphics(70,p_d[3]);
  pg_c3 = createGraphics(70,p_c[3]);
  pg_e3 = createGraphics(70,p_e[3]);
  pg_a3 = createGraphics(70,p_a[3]);
  
  pg_d4 = createGraphics(70,p_d[0]);
  pg_c4 = createGraphics(70,p_c[0]);
  pg_e4 = createGraphics(70,p_e[0]);
  pg_a4 = createGraphics(70,p_a[0]);
  
  scene2_5_setup();
}

function draw() { 
  imageMode(CENTER);  
  textAlign(CENTER, TOP);
  
  if (cnt == 0){   
  light()
  textSize(40);
  textFont('quicksilver')
    fill(0)
  text('Enter키를 눌러 \n 동물들을 구해주세요.',500,100);
  
  }
  else if(cnt==1){
    
    catSound.stop();
    dogSound.stop();
  
    scene0()    
      
   
  }
  else if((cnt ==2)||(cnt==3)){
    scene1_5();        
    
  }
  else if (cnt ==4){    
    scene1();    
  }
  else if (cnt ==5){
    
    scene2__5();
  }
  else if (cnt == 6) {
    scene2();
  }
  else {
    scene3();
  }
  
 
   
  
  
}
function light(){
   pixelDensity(1);
  loadPixels();
    img.loadPixels();
	var lightRadius = 100;
  if(((mouseX<550)&&(mouseX>450))&&((mouseY<800)&&(mouseY>600))){
     lightRadius = 500;
    }
 
  for (var y = 0; y < height; y++ ) {
    for (var x = 0; x < width; x++ ) {
      var loc = (x + y * width) * 4; 
      var r = img.pixels[loc   ]; 
      var g = img.pixels[loc + 1];
      var b = img.pixels[loc + 2];
      var distance = dist(x, y, mouseX, mouseY);     
      var adjustBrightness = map(distance, 0, lightRadius, 1, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);      
      
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; 
    }
  }
  updatePixels();
}

function scene0()
{
  image(img2,width/2,height/2,1000,800);
  image(img3,width/2,i,1100,700);
    i-=3;
    if(i<-230){
      textSize(40);
      textFont('quicksilver')
      text('Enter키를 눌러주세요.',500,100);
      
    }
}

function scene1_5(){
  imageMode(CORNER);
  background(100);
  if(change<3){
    push();
    textFont(font);
    textAlign(CENTER);
    textSize(40);
    textStyle(BOLD);
     fill("#F4D4D4");
  text("엔터키를 눌러보세요",width/2,100);
    pop();
  image(pet,500,530,250,250);
  image(imgr,280,460,330,330);
    //image(imgl,-50,460,330,330);
  }
  else{
    image(imgl,xl,460,330,330);
    image(pet,petx,530,250,250);
    xl-=1;
    petx+=0.7;
    if(xl<-50&&petx>700){
      textFont(font);
      push();
      textAlign(CENTER);
      textSize(40);
      fill("#FFC107");
      text("한 해 버려지는 유기동물의 비율이 얼마인지 아시나요?",width/2,100);
      fill("#FDF2D0");
      text("엔터키를 눌러서 확인해보세요!",width/2,160);
      xl = -50;
      petx = 700;
      pop();
      
    }
  }
  
}
function scene1()
{
   background(100);
  imageMode(CORNER)
  textAlign(CENTER, BOTTOM);
  
  push();
  stroke(col[0]);
  strokeWeight(10);
  line(70,100,110,100);
  stroke(col[1]);
  line(250,100,290,100);
  stroke(col[2]);
  line(400,100,440,100);
  stroke(col[3]);
  line(560,100,600,100);
  pop();
  fill(255);
  textSize(15);
  text("폐사 및 안락사",170,107);
  text("입양(분양)",335,107);
  text("계류기증",480,107);
  text("인도(주인)",645,107);
  
  
  
  pg_d1.background(col[0])
  pg_c1.background(col[0])
  pg_e1.background(col[0])
  pg_a1.background(col[0])
  
  pg_d2.background(col[1])
  pg_c2.background(col[1])
  pg_e2.background(col[1])
  pg_a2.background(col[1])
  
  pg_d3.background(col[2])
  pg_c3.background(col[2])
  pg_e3.background(col[2])
  pg_a3.background(col[2])
  
  pg_d4.background(col[3])
  pg_c4.background(col[3])
  pg_e4.background(col[3])
  pg_a4.background(col[3])
  
  image(pg_d1,80,451);
  image(pg_c1,330,392);
  image(pg_e1,590,435);
  image(pg_a1,850,428);
  
  image(pg_d2,80,364);
  image(pg_c2,330,317);
  image(pg_e2,590,309);
  image(pg_a2,850,345);
  
  image(pg_d3,80,347);
  image(pg_c3,330,286);
  image(pg_e3,590,292);
  image(pg_a3,850,322);
  
  image(pg_d4,80,281);
  image(pg_c4,330,282);
  image(pg_e4,590,283);
  image(pg_a4,850,283);
  
  
  image(img1,-90,130,400,600);
  image(img1,170,130,400,600);
  image(img1,430,130,400,600);
  image(img1,690,130,400,600);
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text("<유기동물 보호 현황>",width/2,60);
  textAlign(CENTER);
  textSize(35);
  text("<개>",107,775);
  text("<고양이>",370,775);
  text("<기타>",630,775);
  text("<전체>",890,775);
  text("Enter -->",890,60);
  
}
function scene2_5_setup() {
  for (let i = 0; i < num; i++) {
    clrList[i] = clr;
    clr +=5;
    
    cardList[i] = [ [-card[0]/2 + 400, -card[1]/2],
                    [card[0]/2 + 400, -card[1]/2],
                    [card[0]/2 + 400, card[1]/2],
                    [-card[0]/2 + 400, card[1]/2] ];
  } 
  rc = 2*PI/num;
  
  for (let i = 0; i < num; i++) {
    fill(clrList[i], 180, 180);
    
    cardRotate(cardList[i], -rc * i);
    drawCard(cardList[i]);

  }
  
}

function scene2_5_draw() {
  textAlign(CENTER);
  imageMode(CORNER); 
  
  rc = (2*PI)/num;
   /*for (let i = 0; i < num; i++) {
    fill(clrList[i], 180, 180);
    
    cardRotate(cardList[i], -rc * i);
    drawCard(cardList[i]);

  }*/
  if (mouseIsPressed) {
    if (mouseX > pmouseX) {
      background(letter);
      rm = map(mouseX - pmouseX, 0, width, 0, 2*PI);
      for (let i = 0; i < num; i++) {
        fill(clrList[i], 180, 180);
        cardRotate(cardList[i], rm);
        drawCard(cardList[i]);
      }
      rt+=rm;
    }
    else if (mouseX < pmouseX) {
      background(letter);
      rm = map(pmouseX - mouseX, 0, width, 0, 2*PI);
      for (let i = 0; i < num; i++) {
        fill(clrList[i], 180, 180);
        cardRotate(cardList[i], -rm);
        drawCard(cardList[i]);
      }
      rt-=rm;
    }
    else{
      
    }
  }
  
  if (mouseY > 600) {
    if (idx != -1) {
      fill(clrList[idx], 180, 180);
      drawCard(cardList[idx]);
    }
    for (let i = 0; i < num; i++) {
      distance(cardList[i], i);
    }
    idx = dt.indexOf(min(dt));
    fill(clrList[idx] + 30, 230, 230)
    drawCard(cardList[idx]);
    if (mouseIsPressed) {
    }
  }
}

function cardRotate(list, deg) {
  for (let i = 0; i < 4; i++) {
    x = list[i][0] * cos(deg) - list[i][1] * sin(deg);
    y = list[i][0] * sin(deg) + list[i][1] * cos(deg);
    
    list[i][0] = x;
    list[i][1] = y;
  }
  
}

function drawCard(list) {
  quad(list[0][0] + width/2, list[0][1] + height+height*3/8, 
       list[1][0] + width/2, list[1][1] + height+height*3/8,
       list[2][0] + width/2, list[2][1] + height+height*3/8,
       list[3][0] + width/2, list[3][1] + height+height*3/8);
}

function distance(list, cn) {
  cx = (list[0][0] + list[2][0])/2 + width/2;
  cy = (list[0][1] + list[2][1])/2 + height+height*3/8;
  
  dt[cn] = dist(cx, cy, mouseX, mouseY);
  
}
function imgf(){
  // resetMatrix();
  src = data.get(idx,8);
  let imgs;
  if(idx<19){
    
  imgs = createImg('https://' + src + '.jpg','No Image');
  imgs.hide();
    // // image(imgs, 320, 120, 350, 300);
  // imgs.size(350,300);
  // imgs.position(320,120);
    if(cnt==6){
    // imgs.hide();
  }
  }
  else{
    imgs = createImg(src,'No Image');   
    imgs.hide();
    // image(imgs, 320, 120, 350, 300);
  //   imgs.size(350,300);
  // imgs.position(320,120);
    
  }
  image(imgs, 320, 120, 350, 300)
}
function mouseReleased() {
  if (mouseY > 600) {
    
   
    fill(0)
    if(idx<19){
      push();
      background(letter);
      scene2_5_draw();
      pop();
    textFont(font, 50);
      textAlign(CENTER,BOTTOM);
  //textSize(30);
  text('<'+data.get(idx,1)+'>',width/2,95)
    textAlign(LEFT,BOTTOM);
  textFont(font, 25)
   text('입소날짜 : '+data.get(idx,2),353,460);
  text('종 : '+data.get(idx,3),422,490);
  text('품종 : '+data.get(idx,4),400,520);
  text('성별 : '+data.get(idx,5),398,550);
  text('나이 : '+data.get(idx,6),400,580);
  text('체중 : '+data.get(idx,7)+'kg',400,610); 
    // imgf();
    }
    else{
      background(letter);
      textAlign(LEFT,BOTTOM);
      textFont(font, 25)
      text('입소날짜 : '+data.get(idx,2),353,460);
  text('종 : '+data.get(idx,3),422,490);
  text('품종 : '+data.get(idx,4),400,520);
  text('성별 : '+data.get(idx,5),398,550);
  text('특징 : '+data.get(idx,6),400,580);
  text('발견지역 : '+data.get(idx,1),354,610);
      // imgf();
    }
    imgf();
  }
}


function scene2(){
  
    scene2_5_draw();
  if (keyIsPressed) {
    if (keyCode == SHIFT) {
      
    canvas2.background(letter);
      
    canvas2.textFont(font, 50);
    canvas2.text('<'+data.get(idx,1)+'>',width/2,95);
    canvas2.textFont(font, 19);
    canvas2.textAlign(CENTER);
    canvas2.text(''+data.get(idx,9),100,450,800,600);
      image(canvas2,0,0);
      imgf();
    }
    }
}

function keyPressed(){
  if(keyCode == ENTER){
    cnt++;
    change ++;
  }
}

function scene3(){
    let link  = createA('https://animal.seoul.go.kr/index',"서울동물복지지원센터");
  link.position(450,570);
    background("#FFD34E");
    image(f_img, width/2, height/2);

  // textFont("나눔손글씨 갈맷글");
  // textAlign(CENTER);
  // textSize(100);
  // fill("#0D0D0D");
  // text("사지말고,",300,350);
  // push();
  // fill("#42DAD4");
  // textSize(120);
  // text("입양",540,355);
  // pop();
  // text("하세요!",740,350);
  //  textSize(100);
  // fill("#0D0D0D");
  // text("Don't Buy Animals,",370,440);
  // push();
  // fill("#42DAD4");
  // textSize(120);
  // text("Adopt",600,535);
  // pop();
  // text("them!",850,530);
}

function scene2__5() {
  push();
  background(100);
  noStroke();
  textFont(font);
  stroke(col[0]);
  strokeWeight(10);
  line(70,50,110,50);
  stroke(col[1]);
  line(250,50,290,50);
  stroke(col[2]);
  line(70,100,110,100);
  stroke(col[3]);
  line(250,100,290,100);
  pop();
  fill(255);
  textSize(15);
  textStyle(BOLD);
  
  textAlign(CENTER,BASELINE);
  text("폐사 및 안락사",170,55);
  text("입양(분양)",335,55);
  text("계류기증",150,105);
  text("인도(주인)",335,105);
  
  textSize(35);
  text("<전체>",230,590);
  
  push();
  noStroke();
  pieChart(350,n_pd,220,360);
  pop();
  
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER)
  text("50.125%",220,450);
  textSize(30);
  text("28.356%",150,300);
  textSize(20);
  text("7.812%",280,260);
  textSize(25);
  text("13.706%",325,330);
  
  textSize(33);
  fill("#FFFFFF")
  textAlign(LEFT);
  text("해마다 유기되어 폐사 및 안락사를 당하는",420,350);
  text("반려동물의 비율은",420,400);
  fill("#FB0437")
  textSize(40);
  text("50%",690,402);
  textSize(33);
  fill("#FFFFFF")
  text("가 넘습니다.",780,402);
  
  text("입양 가능한 동물들을 확인해보세요!",480,710);
  text("엔터키 -->",810,770);
  
  pop();
}

function pieChart(diameter, data,x,y) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    fill(col[i]);
    arc(
      x,y,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(data[i])*3.6
    );
    lastAngle += radians(data[i])*3.6;
  }
}
