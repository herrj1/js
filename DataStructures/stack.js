function Stack(){
	this.stack = [];
}

Stack.prototype.pop = function(){
	this.stack.pop();
}
Stack.prototype.push = function(value){
	return this.stack.push(value);
}
Stack.prototype.peek = function(){
	return this.stack[this.stack.length - 1];
}

Stack.prototype.length - function(){
	return this.stack.length;
}

Stack.prototype.print = function(){
	console.log(this.stack.join(' '));
}

//sample run of this program

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log('Length is 3: ', stack.length());
console.log('Pop is 3: ', stack.pop());
console.log('Peek is 3: ', stack.peek());
stack.print();
