var Room = function() {
	this.door_num = Math.floor(Math.random() * 4) + 1;
	this.doors = this.pickDoors();
	this.creature = this.pickCreature();
	this.item = "sticky boots";
	this.doorN = -1;
	this.doorW = -1;
	this.doorS = -1;
	this.doorE = -1;
}

var Creature = function(name, speed, health, fire, impact, blade, arcane, electricity, water, vul, imm) {
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
	this.vulnerabilities = vul;
	this.immunities = imm;
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

Room.prototype.displayDoors = function(){
	if(this.doors[0]===0){
		$('#north').hide();
	}
	else{
		$('#north').show();
	}
	if(this.doors[1]===0){
		$('#west').hide();
	}
	else {
		$('#west').show();
	}
	if(this.doors[2]===0){
		$('#south').hide();
	}
	else{
		$('#south').show();
	}
	if(this.doors[3]===0){
		$('#east').hide();
	}
	else {
		$('#east').show();
	}
}

var Werewolf = new Creature("Werewolf", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Vampire = new Creature("Vampire", 5, 10, 1, 1, 0, 1, 0, 0, "fire, impact, arcane", "blade, electricity, water");
var Ghost = new Creature("Ghost", 5, 10, 0, 0, 0, 1, 0, 1, "arcane, water", "fire, impact, blade, electricity");
var Ooze = new Creature("Ooze", 5, 10, 1, 0, 0, 0, 1, 0, "fire, electricity", "impact, blade, arcane, water");
var Bees = new Creature("Swarm of Bees", 5, 10, 1, 0, 0, 0, 1, 0, "fire, electricity", "impact, blade, arcane, water");
var Gas = new Creature("Natural Gas Monster", 5, 10, 1, 0, 0, 0, 1, 0, "fire, electricity", "impact, blade, arcane, water");
var Witch = new Creature("Witch", 5, 10, 1, 1, 1, 1, 1, 1, "fire, impact, blade, arcane, electricity, water", "none");
var Foot = new Creature("Giant Foot", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Fan = new Creature("Really Big Fan", 5, 10, 1, 1, 0, 0, 1, 0, "fire, impact, electricity, water", "blade, arcane");
var Venus_Trap = new Creature("Venus Fly Trap", 5, 10, 1, 1, 1, 0, 0, 0, "fire, impact, blade", "arcane, electricity, water");
var Gingerbread = new Creature("Gingerbread Man", 5, 10, 1, 1, 0, 0, 0, 1, "fire, impact, water", "blade, arcane, electricity");
var Doberman = new Creature("Doberman", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Mummy = new Creature("Mummy", 5, 10, 1, 1, 0, 1, 0, 0, "fire, impact, arcane", "blade, electricity, water");
var Canary = new Creature("Canary", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Pants = new Creature("Disembodied Pants", 5, 10, 1, 0, 1, 0, 0, 0, "fire, blade", "impact, arcane, electricity, water");
var Cat_Lady = new Creature("Angry Cat Lady", 5, 10, 0, 0, 0, 1, 0, 1, "fire, impact, blade, electricity", "arcane, water");
var Android = new Creature("Android", 5, 10, 0, 0, 1, 0, 1, 1, "blade, electricity, water", "fire, impact, arcane");
var Lawnmower = new Creature("Sentient Lawnmower", 5, 10, 1, 1, 1, 0, 1, 1, "fire, impact, blade, electricity, water", "arcane");
var Cultist = new Creature("Cultist", 5, 10, 1, 1, 1, 1, 1, 0, "fire, impact, blade, arcane, electricity", "water");
var Skeleton = new Creature("Skeleton", 5, 10, 0, 1, 0, 1, 0, 0, "impact, arcane", "fire, blade, electricity, water");
var Politician = new Creature("Politician", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Voice = new Creature("Sexy Voice", 5, 10, 0, 0, 0, 0, 0, 0, "none", "fire, impact, blade, arcane, electricity, water");
var Clown = new Creature("Clown", 5, 10, 1, 1, 1, 0, 1, 1, "fire, impact, blade, electricity, water", "arcane");
var Doll = new Creature("China Doll", 5, 10, 0, 0, 0, 1, 0, 0, "arcane", "fire, impact, blade, electricity, water");
var Executioner = new Creature("Executioner", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Imp = new Creature("Imp", 5, 10, 0, 1, 1, 1, 0, 1, "impact, blade, arcane, water", "fire, electricity");
var Fireball = new Creature("Fireball", 5, 10, 0, 0, 0, 0, 0, 1, "water", "fire, impact, blade, arcane, electricity");
var Cockroach = new Creature("Cockroach", 5, 10, 0, 1, 1, 0, 1, 1, "impact, blade, electricity, water", "fire, arcane");
var Teddy_Bear = new Creature("Teddy Bear", 5, 10, 1, 1, 1, 0, 0, 0, "fire, impact, blade", "arcane, electricity, water");
var Sand = new Creature("Sand", 5, 10, 0, 0, 0, 0, 0, 1, "water", "fire, impact, blade, arcane, electricity");
var Baby_Ghost = new Creature("Baby Ghost", 5, 10, 0, 0, 0, 1, 0, 1, "arcane, water", "fire, impact, blade, electricity");
var Techno_Demon_Baby = new Creature("Techno Demon Baby", 5, 10, 1, 1, 1, 1, 1, 1, "fire, impact, blade, arcane, electricity, water", "none");
var Child = new Creature("Innocent Child", 5, 10, 1, 1, 1, 0, 1, 0, "fire, impact, blade, electricity", "arcane, water");
var Eddy_Paperhands = new Creature("Eddy Paperhands", 5, 10, 1, 1, 1, 0, 1, 1, "fire, impact, blade, electricity, water", "arcane");

var Portal = new Creature("Portal", 0, 0, 0, 0, 0, 0, "", "");

var creature_list = [Werewolf, Vampire, Ghost, Ooze, Bees, Gas, Witch, Foot, Fan, Venus_Trap, Gingerbread, Doberman, Mummy, Canary, Pants, Cat_Lady, 
Android, Lawnmower, Cultist, Skeleton, Politician, Voice, Clown, Doll, Executioner, Imp, Fireball, Cockroach, Teddy_Bear, Sand, Baby_Ghost, Techno_Demon_Baby,
Child, Eddy_Paperhands];

Room.prototype.pickCreature = function(){
	var ind = Math.floor(Math.random() * creature_list.length);
	return creature_list[ind];
}

Room.prototype.displayCreature = function(){
	$('#name').text(this.creature.name);
	$('#health').text('Health: '+ this.creature.health);
	$('#speed').text('Speed: ' + this.creature.speed);
	$('#immune').text('Immunities: ' + this.creature.immunities);
	$('#vulnerable').text('Vulnerabilities: ' + this.creature.vulnerabilities);
}