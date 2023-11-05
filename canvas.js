var canvas = document.querySelector('canvas')


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

// C is for context 
var c = canvas.getContext('2d');
/*
// x , y , height , width draw variables 
c.fillStyle = 'rgba(255, 0 ,0 ,0.75)';
c.fillRect(100 , 100 , 100, 100)
c.fillStyle = 'rgba(0, 255 ,0 ,0.5)';
c.fillRect(400 , 100 , 100, 100)
c.fillStyle = 'rgba(0, 0 ,255 ,0.23)';
c.fillRect(300 , 300 , 100, 100)
console.log(canvas)

// Draw a Line
/*
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.lineTo(300, 300);
c.lineTo(100, 100);
c.strokeStyle = 'rgba(255, 255 ,255 ,1)';
c.stroke();
*/

/*
// Draw a Line using a loop
for (var i = 0; i < 25; i++){
  var x = Math.random() * window.innerHeight;
  var y = Math.random() * window.innerWidth;
  var j = Math.random() * window.innerWidth;
  var w = Math.random() * window.innerWidth;

        c.beginPath(); 
      c.moveTo(j, w);
      c.lineTo(x, y);
      c.lineTo(x, y);
      c.lineTo(x, y);
      c.lineTo(x, y);
      c.strokeStyle = 'rgba(255, 255 ,255 ,1)';
      c.stroke();
}

// Draw an Arc / Circle
/*
c.beginPath();
c.arc(100, 300, 50, 0, Math.PI * 2, false ) 
c.strokeStyle = 'rgba(0, 255 ,0 ,0.5)';
c.stroke();


// Animate function (Is this a recursive function? It calls upon itself?)
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;

// dx is standard for velocity 
var dx = (Math.random() - 0.5) * 20;
var dy =  (Math.random() - 0.5) * 20;
var radius = 30;
;
*/


/*
// Draw an Arc / Circle with a loop
for (var i = 0; i < 200 ; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;;

    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false ) 
    c.strokeStyle = 'rgba(0, 255 ,0 ,0.5)';
    c.stroke();

}
*/
var mouse = {
  x: undefined,
  y: undefined
 
}
 let maxRadius = 50;
 let minRadius = 5;

 let colorArray = [
        '#04E762',
        '#F5B700',
        '#DC0073',
        '#00A1E4',
        '#89FC00',
        '#247BA0',

 ];
 
window.addEventListener('mousemove', 
        function (event) {
          mouse.x =event.x;
          mouse.y = event.y;
          console.log(mouse)
        })

window.addEventListener('resize',
          function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            init()
          })

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
        c.beginPath(); 
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false ) 
        c.fillStyle = this.color;
        c.fill()
        

  }

  this.update = function() {
    if (this.x + this.radius > innerWidth ||  
      this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
  
    if (this.y + this.radius > innerHeight || 
      this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;  
    this.y += this.dy;

    // Interactivity

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) 
      {
        if (this.radius < maxRadius){
      this.radius += 1;}
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}


var circleArray = [];

console.log(circleArray)

function init() {

  circleArray =[];

for (var i = 0; i < 500; i++) {
      var radius = Math.random() * 3 + 1;
      var x = Math.random() * (innerWidth - radius * 2);
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 5;
      var dy =  (Math.random() - 0.5) * 4;
   
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0 , innerWidth, innerHeight
    );

    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();

    }


}
init();
animate();