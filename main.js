/*
==========
VARIABLES
==========

var c = document.querySelector("#map");
var ctx = c.getContext("2d");
*/
var room_num = 0;
var old_room;
var room;
var next_room;
var rooms = [];

/*
============
DRAW BOARD
============
*/
function newRoom() {
	//ctx.clearRect(0, 0, c.width, c.height);
	room = new Room();
	rooms.push(room);
	//drawGrid();
	//drawDoors(room);
	pickCreature();
};

/*function drawGrid() {
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
*/
/*
=============
BUTTON CLICK
=============
*/
$('#north').click(function() {
	if(room.doorN === -1){
		room.doorN = rooms.length;
		newRoom();
		room.doorS = room_num;
		room_num = rooms.length - 1;
	}
		else{
		old_room = room_num;
		room_num = room.doorN;
		room = rooms[room.doorN];
		room.doorS = old_room;
	}
	$('.room').text('Current Room: ' + room_num);
});

$('#west').click(function() {
	if(room.doorW === -1){
		room.doorW = rooms.length;
		newRoom();
		room.doorE = room_num;
		room_num = rooms.length - 1;
	}
		else{
		old_room = room_num;
		room_num = room.doorW;
		room = rooms[room.doorW];
		room.doorE = old_room;
	}
	$('.room').text('Current Room: ' + room_num);
});

$('#south').click(function() {
	if(room.doorS === -1){
		room.doorS = rooms.length;
		newRoom();
		room.doorN = room_num;
		room_num = rooms.length - 1;
	}
		else{
		old_room = room_num;
		room_num = room.doorS;
		room = rooms[room.doorS];
		room.doorN = old_room;
	}
	$('.room').text('Current Room: ' + room_num);
});

$('#east').click(function() {
	if(room.doorE === -1){
		room.doorE = rooms.length;
		newRoom();
		room.doorW = room_num;
		room_num = rooms.length - 1;
	}
		else{
		old_room = room_num;
		room_num = room.doorE;
		room = rooms[room.doorE];
		room.doorW = old_room;
	}
	$('.room').text('Current Room: ' + room_num);
});
/*
============
OLD CANVAS MOUSE CLICK
============
*/

/*c.addEventListener("mousedown", getPosition, false);

function getPosition(event){
	var x = event.x - c.offsetLeft;
	var y = event.y - c.offsetTop;
	if(x >= 200 && x <= 300 && y >= 0 && y <= 50){
		if(room.doorN != -1){
			old_door = 3;
			newRoom();
		}
	}
	if(x >= 0 && x <= 50 && y >= 200 && y <= 300){
		if(room.doorW != -1){
			old_door = 2;
			newRoom();
		}
	}
	if(x >= 450 && x <= 500 && y >= 200 && y <= 300){
		if(room.doorS != -1){
			old_door = 1;
			newRoom();
		}
	}
	if(x >= 200 && x <= 300 && y >= 450 && y <= 500){
		if(room.doorE != -1){
			old_door = 0;
			newRoom();
		}
	}
}

/*
=================
CREATURES
=================
*/
var creature_list = [new Creature("Werewolf", 5, 10, 1, 1, 1, 0, 1, 0), new Creature("Vampire", 5, 10, 1, 1, 0, 1, 0, 0)];

function pickCreature(){
	var ind = Math.floor(Math.random() * creature_list.length);
	$('#name').text(creature_list[ind].name);
	$('#health').text("Health: " + creature_list[ind].health);
	$('#speed').text("Speed: " + creature_list[ind].speed);
	$('#immune').text("Immune to: ");
	$('#vulnerable').text("Vulnerable to: ");
}

newRoom();