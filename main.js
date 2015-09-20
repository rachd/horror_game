var c = document.querySelector("#map");
var ctx = c.getContext("2d");

var horiz = 50;
var vert = 50;

var old_door = 3;

function newRoom() {
	ctx.clearRect(0, 0, c.width, c.height);
	var room = new Room(old_door);
	console.log(room.doors);
	drawGrid();
	drawDoors(room);
};

function drawGrid() {
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			ctx.strokeRect(50*j, 50*i, 50, 50);
		}
	}
}

function drawDoors(room) {
	door_num = room.door_num;
	doors = room.doors;
	if (doors[0]){
		ctx.fillRect(200, 0, 100, 50);
	}
	if (doors[1]){
		ctx.fillRect(0, 200, 50, 100);
	}
	if (doors[2]){
		ctx.fillRect(450, 200, 50, 100);
	}
	if (doors[3]){
		ctx.fillRect(200, 450, 100, 50);
	}
}

c.addEventListener("mousedown", getPosition, false);

function getPosition(event){
	var x = event.x - c.offsetLeft;
	var y = event.y - c.offsetTop;
	console.log(x + " " + y);
	if(x >= 200 && x <= 300 && y >= 0 && y <= 50){
		old_door = 3;
		newRoom();
	}
	if(x >= 0 && x <= 50 && y >= 200 && y <= 300){
		old_door = 2;
		newRoom();
	}
	if(x >= 450 && x <= 500 && y >= 200 && y <= 300){
		old_door = 1;
		newRoom();
	}
	if(x >= 200 && x <= 300 && y >= 450 && y <= 500){
		old_door = 0;
		newRoom();
	}
}

newRoom();