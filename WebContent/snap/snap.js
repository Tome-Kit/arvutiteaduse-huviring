/**
 * 
 */
var canvas = document.getElementById("canvasArea");
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'black';
context.lineWidth = 1;
context.setLineDash([ 0, 0 ]);
context.globalAlpha = 1;
context.moveTo(10, 20);
context.lineTo(50, 30);
context.stroke();
document.getElementById("point1").onclick = function(){
	console.log(" 15 ");
	document.getElementById("point1").style.visibility = "hidden";
}