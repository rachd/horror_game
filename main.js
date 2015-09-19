var c = document.querySelector("#map");
var ctx = c.getContext("2d");

var horiz = 50;
var vert = 50;

$('button').click(function(){
	var room = new Room();
	console.log(room.doors);
	drawGrid();
});

function drawGrid() {
	for (i = 1; i < 11; i++){
		for (j = 1; j < 11; j++){
			ctx.strokeRect(50*j, 50*i, 50, 50);
		}
	}
}