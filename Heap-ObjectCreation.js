var Heap = require ("./Heap");

var myHeap = new Heap.Heap();
var node = {
	data : 5.5
};
console.log (myHeap.addNode (5));
console.log (myHeap.addNode (6));
console.log (myHeap.addNode (3));
//console.log (myHeap.addNode (node));
console.log (myHeap.addNode (5.5));
console.log (myHeap.addNode (9));
console.log (myHeap.addNode (7));
console.log (myHeap.addNode (2.3));
myHeap.printHeap();
console.log (myHeap.deleteNode (5.5));
console.log (myHeap.deleteNode (77));
myHeap.printHeap();
console.log ("Max Element " + myHeap.maxValue());