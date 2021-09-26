//js Arrays implementationa
function MyArray(){
  this.array = [];

}

MyArray.prototype.add = function(data){
  this.array.push(data);
};

MyArray.prototype.remove = function(data){
  this.array = this.array.filter(function(current){
     return current !== data;
  });
};

MyArray.prototype.search = function(data){
  var foundIndex = this.array.indexOf(data);
  if(~foundIndex){
    return foundIndex;
  }
  
  return null;
};

MyArray.prototype.getAtIndex = function(index){
  return this.array[index];
};

MyArray.prototype.length = function(){
  return this.array.length;
};

MyArray.prototype.print = function(){
  console.log(this.array.join(' '));
};

var array = new MyArray();
array.add(23);
array.add(41);
array.add(72);
array.add(90);
array.print();
console.log('Return index of 90:', array.search(90));
console.log('Return number given 41:', array.getAtIndex(41));
console.log('Return length or array:', array.length());
array.print();
