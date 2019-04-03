var MazdaModels = function(){
	this.numWheels = 4;
	this.manufacturer = 'Mazda';
	this.make = 'Coupe';
}
MazdaModels.prototype.go = function(){
	console.log("Car is moving forwards.");
}

MazdaModels.prototype.stop = function(){
	console.log("Car is stopped.");
}
