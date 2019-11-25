var canvas =document.getElementById("MyCanvas");
var c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=(Math.random()-0.5)*8;
var dy=(Math.random()-0.5)*8;
var r=30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(x, y, r, 0, 2 * Math.PI);
  c.strokeStyle='red';
  c.stroke();
  if(x+r>innerWidth || x-r<0){
    dx=-dx;
  }

  if(y+r>innerHeight || y-r<0){
    dy=-dy;
  }
  x+=dx;
  y+=dy;



}

animate()
