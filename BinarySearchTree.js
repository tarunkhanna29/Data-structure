var Queue = require ("./Queue_usingLinkedList");

var BST = function() {
	this.root = null;
}

var node = function(val, left, right) {
	this.data = val;
	this.left = left || null;
	this.right = right || null;
}

BST.prototype.addNode = function (val) {
	if (val == null) {
		return;
	}
	var newNode = new node (val);
	if (this.root == null) {
		this.root = newNode;
		return;
	}
	var currentNode = this.root;	
	var prevNode = null;
	while (currentNode != null) {		
		prevNode = currentNode;
		if (val <= currentNode.data) {
			currentNode = currentNode.left;
		} else {
			currentNode = currentNode.right;
		}
	}
	if (val <= prevNode.data) {
		prevNode.left = newNode;
	} else {
		prevNode.right = newNode;
	}
}

BST.prototype.postOrder = function() {
	if (this.root != null) {
		postOrderUtil (this.root);
	} else {
		console.log ("Empty Tree");
	}

}

var postOrderUtil = function (val) {
	if (val != null) {
		postOrderUtil (val.left);
		postOrderUtil (val.right);
		console.log (val.data);
	}
}

BST.prototype.printLevelOrder = function () {
	if (this.root == null) {
		console.log ("Empty Tree");
		return;
	}
	var myQueue = new Queue.Queue();
	myQueue.enqueue (this.root);
	myQueue.enqueue (" ");
	while (!myQueue.isEmpty()) {
		var tmp = myQueue.dequeue();
		if (tmp != " ") {
			console.log (tmp.data);
			if (tmp && tmp.left) myQueue.enqueue (tmp.left);
			if (tmp && tmp.right) myQueue.enqueue (tmp.right);
		}
		else {
			console.log ("----");
			if (!myQueue.isEmpty()) {
				myQueue.enqueue (" ");
			}
		}
	}
}

module.exports.BST = BST;