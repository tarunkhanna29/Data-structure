var Queue = function () {
	this.array = [];
}

Queue.prototype.isEmpty = function() {
	return this.array.length === 0;
}

Queue.prototype.enqueue = function (x) {
	this.array.push (x);
}

Queue.prototype.dequeue = function () {
	this.array.shift ();
}

Queue.prototype.peek = function () {
	return this.array[0];
}

var myqueue = new Queue();
myqueue.dequeue ();
myqueue.enqueue (5);
myqueue.enqueue (7);
console.log (myqueue.peek ());
console.log (myqueue);
console.log (myqueue.isEmpty());