var c = document.querySelector("#map");
var ctx = c.getContext("2d");

var horiz = 50;
var vert = 50;

$('button').click(function(){
	var room = new Room();
	console.log(room.doors);
	drawGrid();
	drawDoors(room);
});

function drawGrid() {
	for (i = 1; i < 11; i++){
		for (j = 1; j < 11; j++){
			ctx.strokeRect(50*j, 50*i, 50, 50);
		}
	}
}

function drawDoors(room) {
	doors = room.doors;
	if (doors >= 1){
		ctx.fillRect(250, 50, 100, 50);
	}
	if (doors >= 2){
		ctx.fillRect(50, 250, 50, 100);
	}
	if (doors >= 3){
		ctx.fillRect(500, 250, 50, 100);
	}
	if (doors >= 4){
		ctx.fillRect(250, 500, 100, 50);
	}
}