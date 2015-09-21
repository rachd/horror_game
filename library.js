var Room = function(old_door) {
	this.door_num = Math.floor(Math.random() * 4) + 1;
	this.doors = this.pickDoors();
	this.doors[old_door] = 1;
	this.creature = "vampire";
	this.item = "sticky boots";
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