var LinkedList = function () {
	this.head = null;
}

LinkedList.prototype.isEmpty = function () {
	return this.head === null;
}

LinkedList.prototype.addNewNodeAtBeg = function (val) {
	var newNode = {
		data : val,
		next : this.head
	};
	this.head = newNode;
}

LinkedList.prototype.addNewNodeAtEnd = function (val) {
	var start = this.head;
	var newNode = {
		data : val,
		next : null
	};
	if (start == null) {
		this.head = newNode;
		return;
	}
	while (start != null && start.next != null) {
		start = start.next;
	}
	start.next = newNode;
}

LinkedList.prototype.linkedListSize = function () {
	var start = this.head;
	var size = 0;
	while (start != null) {
		size++;
		start = start.next;
	}
	return size;
}

LinkedList.prototype.removeNodeFromBeg = function() {
	var start = this.head;
	if (!this.isEmpty()) {
		this.head = this.head.next;
		start.next = null;
	} else {
		return;
	}
	return start.data;
}

LinkedList.prototype.removeNodeFromEnd = function () {
	var start = this.head;
	var end = null;
	if (this.isEmpty()) {
		return;
	}
	if (this.linkedListSize === 1) {
		this.head = null;
		return;
	}
	if (!this.isEmpty()) {
		while (start.next.next != null) {
			start = start.next;
		}
		end = start.next;
		start.next = null;
	}
	return end.data;
}

LinkedList.prototype.print = function () {
	var start = this.head;
	while (start != null) {
		console.log (start.data);
		start = start.next;
	}
}

module.exports.LinkedList = LinkedList;