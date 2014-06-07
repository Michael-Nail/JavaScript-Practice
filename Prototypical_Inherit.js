//The constructor of a class changes to the constructor of the new prototype.

console.log("Making sure anything prints at all.");

var popup = function() { //behaving as expected!
	var Boat = function(name) {
		this.name,
		this.thingType = "Boat",
        this.wheels = 0,
        this.crew = 10;
    };
    var CarBoat = function(name) {
    	this.name = name,
    	this.thingType = "Car-boat",
        this.wheels = 4,
        this.crew = 2;
    };
	console.log("Boat prototype constructor before switching prototype to an instance of Boat:");
	console.log(CarBoat.prototype.constructor); //Should return Boat
    Boat.prototype = new Boat("Bertha");
    console.log("After \"Bertha\" Boat() instance set as prototype constructor:");
    console.log(Boat.prototype.constructor); //Should return CarBoat.
}

//########################################################################
//# I want to set the prototype of CarBoat to an instance of Car without #
//# having the car prototyope invade the CarBoat constructor.            #
//# Ultimately, I would like full access to the prototype inheritance    #
//# chain from any starting point. This should put me on that path:      #
//########################################################################

var popup2 = function() { 
    var CarBoat = function() { //Sets CarBoat to be its own constructor.
        this.constructor = CarBoat("Master-CarBoat"); 
    }; 
	console.log("\"Master-CarBoat\" CarBoat instance set as constructor of CarBoat()");
	console.log("CarBoat prototype constructor returns:" /*CarBoat.prototype.constructor*/);
}