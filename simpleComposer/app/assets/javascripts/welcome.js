
function main(c, ctx){
draw(c, ctx);
}

function clear(ctx){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function draw(c, ctx){
c.addEventListener("mousedown", getPosition, false);
ctx.canvas.width  = window.innerWidth/2;
ctx.canvas.height = (window.innerHeight/3)*2;
clear(ctx);
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
}

function getPosition(e){
	var x = e.x;
	var y = e.y;

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	x -= c.offsetLeft;
	y -= c.offsetTop;

	ctx.beginPath();
	ctx.rect(x,y,100,100);
	ctx.closePath();
	ctx.fill();
}

function rect(x,y,w,h){
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
}

window.onload = function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
setInterval(function(){
	draw(c, ctx);
}, 333);
}
