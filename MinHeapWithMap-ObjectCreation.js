var MinHeap = require ("./MinHeapWithMap");

var newHeap = new MinHeap.Heap ();
var node = {
	key : 'a',
	data : 5
};
console.log (newHeap.addNode (node));
console.log (newHeap.addNode (node));
node = {
	key : 'b',
	data : 7
};
newHeap.addNode (node);
node = {
	key : 'c',
	data : 6
};
newHeap.addNode (node);
var node1 = {
	key : 'd',
	data : 11
};
newHeap.addNode (node1);
node = {
	key : 'e',
	data : 3
};
newHeap.addNode (node);
node = {
	key : 'f',
	data : 9
};
newHeap.addNode (node);
newHeap.deleteNode ("e");
console.log ("Delete Node " + newHeap.deleteNode ("d"));
console.log ("Delete Node " + newHeap.deleteNode ("d"));
newHeap.printHeapAndHash ();
console.log (newHeap.extractMin ());
console.log (newHeap.extractMin ());
newHeap.printHeapAndHash ();
console.log (newHeap.contains (node));

MinHeap.Heap.prototype.decrease = function (objOrKey, newVal) {
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

newHeap.decrease (node, 3);
newHeap.printHeapAndHash ();