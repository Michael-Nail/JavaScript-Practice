//The constructor of a class changes to the constructor of the new prototype.
var Boat = function() {
	this.wheels = 0,
	this.crew = 10;
};
var CarBoat = function() {
	this.wheels = 4,
	this.crew = 2;
};

console.log("Making sure anything prints at all.");

console.log(Boat.prototype.constructor); //Should return Boat
Boat.prototype = new CarBoat();
console.log(Boat.prototype.constructor); //Should return CarBoat.