
function main(c, ctx){
draw(c, ctx);
}

function clear(ctx){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



function square(x,y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}
var color = "black";

var squares = new Array();
var buttons = new Array();

function drawButtons(c, ctx){
ctx.beginPath();
ctx.rect(((ctx.canvas.width/6)/2)-15,(ctx.canvas.height/15),30,30);
ctx.closePath();
ctx.fill();
ctx.fillStyle="#FF0000";
ctx.beginPath();
ctx.rect(((ctx.canvas.width/6)/2)-15,(ctx.canvas.height/15)*3,30,30);
ctx.closePath();
ctx.fill();
ctx.fillStyle="#000000";
}



function draw(c, ctx){
c.addEventListener("mousedown", getPosition, false);
ctx.canvas.width  = window.innerWidth/2;
ctx.canvas.height = (window.innerHeight/3)*2;
clear(ctx);
ctx.beginPath();
ctx.moveTo((ctx.canvas.width)/6,0);
ctx.lineTo(ctx.canvas.width/6, ctx.canvas.height);
ctx.stroke();
drawButtons(c,ctx);
for(box in squares){
	if(squares[box].color == "black"){
		ctx.fillStyle="#000000";
	}
	if(squares[box].color == "red"){
		ctx.fillStyle="#FF0000";
	}
	ctx.beginPath();
	ctx.rect(squares[box].x,squares[box].y,squares[box].width,squares[box].height);
	ctx.closePath();
	ctx.fill();
}
}

function getPosition(e){
	var x = e.x;
	var y = e.y;

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	x -= c.offsetLeft;
	y -= c.offsetTop;
	if(x < ctx.canvas.width/6 && y > 100){
		color = "red";
	}
	if(x < ctx.canvas.width/6 && y < 100){
		color = "black";
	}
	if(x > ctx.canvas.width/6){
	squares.push(new square(x,y,10,10, color))
}

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
}, 150);
}
