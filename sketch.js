let benda =[];
function setup() {
  createCanvas(600, 600);
  
  for (let i=0;i<50 ; i++){
    benda.push(new Mover());
  }
}



function draw() {
  background(24);
  for (i=0;i<benda.length;i++){
    benda[i].gerakan();
    benda[i].tampil();
    benda[i].cekBatas(); 
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random (5,15);
  }
  
  tampil(){
    stroke('purple')
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(this.location.x,
            this.location.y, 
            this.panjanglebar, 
            this.panjanglebar);
    rect(this.location.x,
            this.location.y, 
            this.panjanglebar, 
            this.panjanglebar);
  }
  
  gerakan(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = random (0,30);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}