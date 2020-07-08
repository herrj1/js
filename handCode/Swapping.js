//swapping
function Swapping(){
	this.stack = [];
}
Swappping.prototype.exchange = function(container[], m, n){
	var temp;
	temp = container[m];
	container[m] = container[n];
	container[n] = temp;
}
