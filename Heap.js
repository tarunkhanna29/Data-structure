//Max Binary Heap
var Heap = function() {
	this.array = [];
}

Heap.prototype.addNode = function (val) {
	this.array.push (val);
	return heapifyUp (this.array, this.array.length-1);
}

var heapifyUp = function (arr, index) {
	if (!arr || index > arr.length-1) {
		return false;
	}
	if (index == 0) {
		return true;
	}	
	var parIndex = parentIndex (arr, index);
	var parVal = (typeof (arr[parIndex]) == "number") ? arr[parIndex] : arr[parIndex].data;
	var curVal = (typeof (arr[index]) == "number") ? arr[index] : arr[index].data;	
	if (curVal > parVal) {
		swap (arr, index, parIndex);
		heapifyUp (arr, parIndex);
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

var swap = function (arr, index, parentIndex) {
	if (arr) {
		var tmp = arr[index];
		arr[index] = arr[parentIndex];
		arr[parentIndex] = tmp;
		return true;
	}
	return false;}

Heap.prototype.deleteNode = function (val) {
	var currIndex = findNode (this.array, val);
	if (currIndex < 0) {
		return false;
	}
	this.array[currIndex] = this.array[this.array.length-1];
	this.array.pop ();
	return heapifyDown (this.array, currIndex);
}

var heapifyDown = function (arr, index) {
	if (!arr && index > arr.length-1) {
		return false;
	}
	var leftChildIndex = leftChild (arr, index);
	var rightChildIndex = rightChild (arr, index);
	if (leftChildIndex < arr.length && rightChildIndex < arr.length) {
		var maxIndex = findMaxIndex (arr, index, leftChildIndex, rightChildIndex);
		if (index != maxIndex) {
			swap (arr, index, maxIndex);
			return heapifyDown (arr, maxIndex);
		}
	} else if (leftChildIndex < arr.length) {
		if (arr[index] < arr[leftChildIndex]) {
			swap (arr, index, leftChildIndex);
			return heapifyDown (arr, leftChildIndex);
		}
	}
	return true;
}

var findMaxIndex = function (arr, index, leftChildIndex, rightChildIndex) {
	var maxIndex = -1;
	if (arr) {
		maxIndex = (arr[index] > arr[leftChildIndex]) ? index : leftChildIndex;
		maxIndex = (arr[maxIndex] > arr[rightChildIndex]) ? maxIndex : rightChildIndex;
	}
	return maxIndex;
}

var findNode = function (arr, val) {
	return arr.indexOf (val);
}

Heap.prototype.printHeap = function () {
	console.log ("\n<-- Printing Heap -->");
	for (var i=0; i<this.array.length; i++) {
		console.log (this.array[i]);
	}
}

Heap.prototype.maxValue = function () {
	return this.array[0];
}

module.exports.Heap = Heap;