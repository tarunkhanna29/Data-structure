var LinkedList = require ("./LinkedList");

var Queue = function () {
	this.linkedList = new LinkedList.LinkedList();
}

Queue.prototype.enqueue = function (x) {
	this.linkedList.addNewNodeAtEnd (x);
}

Queue.prototype.dequeue = function () {
	return this.linkedList.removeNodeFromBeg();
}

Queue.prototype.size = function () {
	return this.linkedList.linkedListSize();
}

Queue.prototype.isEmpty = function () {
	return this.linkedList.isEmpty();
}

Queue.prototype.print = function () {
	this.linkedList.print ();
}

module.exports.Queue = Queue;