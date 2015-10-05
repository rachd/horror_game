/*
==========
VARIABLES
==========
*/
var c = document.querySelector("#map");
var ctx = c.getContext("2d");

var room_num = 0;
var old_room;
var room;
var next_room;
var rooms = [];

var num_players;
var turn = 0;
var players = [];
var player;

/*
============
DRAW BOARD
============
*/
function newRoom() {
	room = new Room();
	rooms.push(room);
	drawGrid();
	room.displayCreature();
	room.displayItem();
};

function drawGrid() {
	for (i = 0; i < 10; i++){
		for (j = 0; j < 10; j++){
			ctx.strokeRect(50*j, 50*i, 50, 50);
		}
	}
}

function drawDoors(room) {
	ctx.clearRect(0, 0, c.width, c.height);
	drawGrid();
	door_num = room.door_num;
	doors = room.doors;
	if (doors[0]){
		ctx.fillRect(200, 0, 100, 50);
	}
	if (doors[1]){
		ctx.fillRect(0, 200, 50, 100);
	}
	if (doors[3]){
		ctx.fillRect(450, 200, 50, 100);
	}
	if (doors[2]){
		ctx.fillRect(200, 450, 100, 50);
	}
}

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
		room.doors[2] = 1;
		room_num = rooms.length - 1;
	}
	else {
		old_room = room_num;
		room_num = room.doorN;
		room = rooms[room.doorN];
		room.doorS = old_room;
		room.displayCreature();
	}
	room.displayDoors();
	drawDoors(room);
	$('.room').text('Current Room: ' + room_num);
});

$('#west').click(function() {
	if(room.doorW === -1){
		room.doorW = rooms.length;
		newRoom();
		room.doorE = room_num;
		room.doors[3] = 1;
		room_num = rooms.length - 1;
	}
	else {
		old_room = room_num;
		room_num = room.doorW;
		room = rooms[room.doorW];
		room.doorE = old_room;
		room.displayCreature();
		room.displayItem();
	}
	room.displayDoors();
	drawDoors(room);
	$('.room').text('Current Room: ' + room_num);
});

$('#south').click(function() {
	if(room.doorS === -1){
		room.doorS = rooms.length;
		newRoom();
		room.doorN = room_num;
		room.doors[0] = 1;
		room_num = rooms.length - 1;
	}
	else {
		old_room = room_num;
		room_num = room.doorS;
		room = rooms[room.doorS];
		room.doorN = old_room;
		room.displayCreature();
		room.displayItem();
	}
	room.displayDoors();
	drawDoors(room);
	$('.room').text('Current Room: ' + room_num);
});

$('#east').click(function() {
	if(room.doorE === -1){
		room.doorE = rooms.length;
		newRoom();
		room.doorW = room_num;
		room.doors[1] = 1;
		room_num = rooms.length - 1;
	}
	else {
		old_room = room_num;
		room_num = room.doorE;
		room = rooms[room.doorE];
		room.doorW = old_room;
		room.displayCreature();
		room.displayItem();
	}
	room.displayDoors();
	drawDoors(room);
	$('.room').text('Current Room: ' + room_num);
});

/*
=================
Countdown Clock
=================
*/
var timeInMinutes = 1;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000);

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
      $('.container-fluid').hide();
      $('h1').removeClass('hidden');
    }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);

// if getTimeRemaining(endtime){
	
// }

/*
=============
Turn Tracker
=============
*/
function updateTurn(){
	storeRoom(player, room);
	turn = ((turn + 1) % (num_players));
	console.log(turn);
	$('.turn').text("Player " + turn);
	player = players[turn];
	console.log(players[turn]);
	switchPlayer(room);
}

$('#player').click(function(){
	updateTurn(player, room);
});

function switchPlayer(){
	room = player.room;
	room.displayCreature();
	room.displayItem();
	room.displayDoors();
	drawDoors(room);
	$('.room').text('Current Room: ' + room_num);
}

function storeRoom(){
	player.room = room;
}

/*
===================
Create First Room
===================
*/
room = new Room();
rooms.push(room);
room.creature = Portal;
room.displayCreature();
room.displayItem();
room.doors=[1, 1, 0, 1];
room.displayDoors();
drawGrid();
drawDoors(room);

/*
==========
Read form
==========
*/
$('#person').click(function(){
	num_players = $('#people').val();
	$('#person').hide();
	$('form').hide();
	//Initialize Players
	for (var i = 0; i < num_players; i++){
		players[i] = new Player(room);
	}
	player = players[0];
})
