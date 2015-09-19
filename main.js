var c = document.querySelector("#map");
var ctx = c.getContext("2d");

var horiz = 50;
var vert = 50;

$('button').click(function(){
	ctx.clearRect(0, 0, c.width, c.height);
	var room = new Room();
	console.log(room.doors);
	drawGrid();
	drawDoors(room);
});

$('#north').click(function(){

});

function drawGrid() {
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			ctx.strokeRect(50*j, 50*i, 50, 50);
		}
	}
}

function drawDoors(room) {
	doors = room.doors;
	if (doors >= 1){
		ctx.fillRect(200, 0, 100, 50);
	}
	if (doors >= 2){
		ctx.fillRect(0, 200, 50, 100);
	}
	if (doors >= 3){
		ctx.fillRect(450, 200, 50, 100);
	}
	if (doors >= 4){
		ctx.fillRect(200, 450, 100, 50);
	}
}

c.addEventListener("mousedown", getPosition, false);

function getPosition(event){
	var x = event.x - c.offsetLeft;
	var y = event.y - c.offsetTop;
	console.log(x + " " + y);
	if(x >= 500 && x <= 550 && y >= 250 && y <= 350){
		console.log('right button clicked');
	}
	if(x >= 250 && x <= 350 && y >= 50 && y <= 100){
		console.log('top button clicked');
	}
	if(x >= 50 && x <= 100 && y >= 250 && y <= 350){
		console.log('left button clicked');
	}
	if(x >= 250 && x <= 350 && y >= 425 && y <= 475){
		console.log('bottom button clicked');
	}
}
