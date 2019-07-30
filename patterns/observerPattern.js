$scope.$on('nameChanged', function(event, args){
	$scope.name = args.name;
});
$scope.userNameChanged = function(name){
	$scope.$emit('nameChanged', {name: name});
};
var Subject = function(){
	this.observers = [];
	return{
		subscribeObserver: function(observer){
			this.observers.push(observer);
		},
		unsubscribeObserver: function(observer){
			var index = this.observers.indexOf(observer);
			if(index > -1){
				this.observer.splice(index, 1);
			}
		},
		notifyObserver: function(observer){
			var index = this.observers.indexOf(observer);
			if(index > -1){
				this.observers[index].notify(index);
			}
		},
		notifyAllObservers: function(){
			for(var i = 0; i < this.observers.length; i++){
				this.observers[i].notify(i);
			};
		}
	};
};
var Observer = function(){
	return{
		notify: function(index){
			console.log("Observer "+ index + " was notified!.")
		}
	}
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();
var observer5 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);
subject.subscribeObserver(observer5);

subject.notifyObserver(observer2);
subject.notifyAllObservers();
