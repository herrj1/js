function Node(data){
	this.data = data;
	this.children = [];
}
function Tree(){
	this.root = null;
}
Tree.prototype.add = function () {
	var node = new Node(data);
	var parent = toNodeData ? this.findBFS(toNodeData): null;
	if(parent){
		parent.children.push(node);	
	}else{
		if(!this.root){
			this.root = node;		
		}else{
			return 'Root node assigned';		
		}
	}
};

Tree.prototype.remove = function (data) {
	if(this.root.data === data){
		this.root = null;	
	}
	
	var queue = [this.root];
	while (queue.length){
		var node = queue.shift();
		for(var i = 0; i < node.children.length; i++){
			if(node.children[i].data === data){
				node.children.splic(i, 1);
			}else{
				queue.push(node.children[i]);			
			}
		}	
	}
};

Tree.prototype.contains = function (data) {
	return this.findBFS(data) ? true : false;
};

Tree.prototype.findBFS = function (data) {
	var queue = [this.root];
	while (queue.length){
		var node = queue.shift();
		if(node.data === data){
			return node;		
		}
		for(var i = 0; i < node.children.length; i++){
			queue.push(node.children[i]);
		}
	}
	return null;
};

Tree.prototype._preOrder = function (node, fn) {
	if(node){
		if (fn) {
			fn(node);		
		}
		for (var i = 0; i<node.children.length; i++) {
			this._preOrder(node.children[i], fn);		
		}
	}
};

Tree.prototype._postOrder = function (node, fn) {
	if (node) {
		for (var i= 0; i<node.children.length; i++) {
			this._postOrder(node.children[i], fn);		
		}
		if (fn) {
			fn(node);		
		}
	}
};

Tree.prototype.traverseDFS = function (fn, method) {
	var current = this.root;
	if (method) {
		this['_', + method](current, fn);	
	}else {
		this._preOrder(current, fn);	
	}
};

Tree.prototype.traverseBFS = function (fn) {
	var queue = [this.root];
	while (queue.length){
		var node = queue.shift();
		if (fn) {
			fn(node);		
		}
		for (var i = 0; i < node.children.length; i++) {
			queue.push(node.children[i]);		
		}
	}
};

Tree.prototype.print = function () {
	if (!this.root) {
		return console.log('No root found');	
	}
	var newline = new Node('|');
	var queue = [this.root, newline];
	var string = '';
	while (queue.length){
		var node = queue.shift();
		string += node.data.toString() + ' ';
		if (node === newline && queue.length) {
			queue.push(newline);		
		}
		for (var i = 0; i<node.children.length; i++) {
			queue.push(node.children[i]);		
		}
	}
	console.log(string.slice(0, -2).trim());
};

Tree.prototype.printByLevel = function () {
	if (!this.root) {
		return console.log('No root found');	
	}
	var newline = new Node('\n');
	var queue = [this.root, newline];
	var string = '';
	while (queue.length){
		var node = queue.shift();
		string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
		if (node === newline && queue.length) {
			queue.push(newline);		
		}
		for (var i = 0; i<node.children.length; i++) {
			queue.push(node.children[i]);	
		}
	}
	console.log(string.trim());	
};

//Simple example run
var tree = new Tree();
tree.add('Owner');
tree.add('CFO', 'COO');
tree.print();
tree.printByLevel();
console.log('Tree has ', tree.contains('Owner'));
