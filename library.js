var Room = function() {
	//this.door_num = Math.floor(Math.random() * 4) + 1;
	//this.doors = this.pickDoors();
	//this.doors[old_door] = 1;
	this.creature = this.pickCreature();
	this.item = "sticky boots";
	this.doorN = -1;
	this.doorW = -1;
	this.doorS = -1;
	this.doorE = -1;
}

var Creature = function(name, speed, health, fire, impact, blade, arcane, electricity, water) {
	this.square = Math.floor(Math.random()*81)+1;
	this.name = name;
	this.speed = speed;
	this.health = health;
	this.fire = fire;
	this.impact = impact;
	this.blade = blade;
	this.arcane = arcane;
	this.water = water;
	this.electricity = electricity;
}

var Door = function(x, y, width, height) {
	this.left = x;
	this.top = y;
}

Room.prototype.pickDoors = function(){
	var doors = [];
	for (i = 0; i < 4; i++){
		doors[i] = Math.floor(Math.random()*2);
	}
	return doors;
}

var Werewolf = new Creature("Werewolf", 5, 10, 1, 1, 1, 0, 1, 0);
var Vampire = new Creature("Vampire", 5, 10, 1, 1, 0, 1, 0, 0);
var creature_list = [Werewolf, Vampire];

Room.prototype.pickCreature = function(){
	var ind = Math.floor(Math.random() * creature_list.length);
	return creature_list[ind];
}

Room.prototype.displayCreature = function(){
	$('#name').text(this.creature.name);
	$('#health').text('Health: '+ this.creature.health);
	$('#speed').text('Speed: ' + this.creature.speed);
	$('#immune')
	$('#vulnerable')
}