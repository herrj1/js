var MazdaModels = function(){
	this.numWheels = 4;
	this.manufacturer = 'Toyota';
	this.make = 'Coupe';
}

MazdaModels.prototype.go = function(){
	console.log("Car is moving forward.");
}

MazdaModels.prototype.stop = function(){
	console.log("Car is stopped.");
}
