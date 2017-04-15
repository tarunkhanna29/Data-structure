var Heap = function() {
	this.array = [];
	this.hash = {};
}

Heap.prototype.addNode = function (val) {
	if (this.hash[val.key] || this.hash[val.key] == 0) {
		return false;
	}
	this.array.push (val);
	this.hash[val.key] = this.array.length-1;
	return heapifyUp (this.array, this.array.length-1, this.hash);
}

var heapifyUp = function (arr, index, hash) {
	if (!arr || index > arr.length-1 || !hash) {
		return false;
	}
	if (index == 0) {
		return true;
	}	
	var parIndex = parentIndex (arr, index);
	var parVal = (typeof (arr[parIndex]) == "number") ? arr[parIndex] : arr[parIndex].data;
	var curVal = (typeof (arr[index]) == "number") ? arr[index] : arr[index].data;	
	if (curVal < parVal) {
		swap (arr, index, parIndex, hash);
		heapifyUp (arr, parIndex, hash);
	}
	return true;
}

var parentIndex = function (arr, index) {
	return Math.floor ((index-1)/2);
}

var leftChild = function (arr, index) {
	return 2*index + 1;
}

var rightChild = function (arr, index) {
	return 2*index + 2;
}

var swap = function (arr, index, parentIndex, hash) {
	if (arr && hash) {
		var tmp = arr[index];
		arr[index] = arr[parentIndex];
		arr[parentIndex] = tmp;
		var tmpPos = hash[arr[index].key];
		hash[arr[index].key] = hash[arr[parentIndex].key];
		hash[arr[parentIndex].key] = tmpPos;
		return true;
	}
	return false;}

Heap.prototype.deleteNode = function (val) {
	var currIndex = findNode (val, this.hash);
	if (currIndex < 0) {
		return false;
	}	
	delete this.hash[this.array[currIndex].key];
	this.array[currIndex] = this.array[this.array.length-1];
	this.hash[this.array[currIndex].key] = currIndex;
	this.array.pop ();
	return heapifyDown (this.array, currIndex, this.hash);
}

var heapifyDown = function (arr, index, hash) {
	if (!arr && index > arr.length-1 && !hash) {
		return false;
	}
	var leftChildIndex = leftChild (arr, index);
	var rightChildIndex = rightChild (arr, index);
	if (leftChildIndex < arr.length && rightChildIndex < arr.length) {
		var minIndex = findMinIndex (arr, index, leftChildIndex, rightChildIndex);
		if (index != minIndex) {
			swap (arr, index, minIndex, hash);
			return heapifyDown (arr, minIndex, hash);
		}
	} else if (leftChildIndex < arr.length) {
		if (arr[index] < arr[leftChildIndex]) {
			swap (arr, index, leftChildIndex, hash);
			return heapifyDown (arr, leftChildIndex, hash);
		}
	}
	return true;
}

var findMinIndex = function (arr, index, leftChildIndex, rightChildIndex) {
	var minIndex = -1;
	if (arr) {
		minIndex = (arr[index].data < arr[leftChildIndex].data) ? index : leftChildIndex;
		minIndex = (arr[minIndex].data < arr[rightChildIndex].data) ? minIndex : rightChildIndex;
	}
	return minIndex;
}

var findNode = function (val, hash) {
	if (typeof (val) == "string" && (hash[val] || hash[val] == 0)) return hash[val];
	else if (typeof (val) == "object" && (hash[val.key] || hash[val.key] == 0)) return hash[val.key];
	return -1;
}

Heap.prototype.printHeapAndHash = function () {
	console.log ("\n<-- Printing Heap -->");
	for (var i=0; i<this.array.length; i++) {
		console.log (this.array[i]);
	}
	console.log ("\n<-- Printing Hash -->");
	for (var key in this.hash) {
		console.log ("Key " + key + " value " + this.hash[key]);
	}
}

Heap.prototype.extractMin = function () {
	var minNode = this.array[0];
	this.deleteNode (this.array[0]);
	return minNode;
}

Heap.prototype.contains = function (val) {
	if (typeof (val) == "object") {
		return (this.hash[val.key] || this.hash[val.key] == 0) ? true : false;
	}
	else if (typeof (val) == "string") {
		return (this.hash[val] || this.hash[val] == 0) ? true : false;
	}
	return false;
}

Heap.prototype.decrease = function (objOrKey, newVal) {
	var success = this.deleteNode (objOrKey);
	if (!success) {
		return false;
	}
	if (typeof (objOrKey) == "string") {
		var node = {
			key : objOrKey,
			data : newVal
		};
	} else if (typeof (objOrKey) == "object") {
		node = objOrKey;
		node.data = newVal;
	}
	return this.addNode (node);
}

Heap.prototype.getValue = function (key) {
	key = JSON.stringify (key);
	if ((this.hash[key] || this.hash[key] == 0) && (this.hash[key] < this.array.length)) {
		return this.array[this.hash[key]].data;
	}
	return -1;
}

Heap.prototype.isEmpty = function () {
	if (this.array.length < 1) {
		return true;
	}
	return false;
}

module.exports.Heap = Heap;