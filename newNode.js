var node = function () {
	this.data;
	this.next;
}

var newNode = new node ();
console.log (newNode);
newNode.data = 5;
console.log (newNode);
newNode.next = newNode;
console.log (newNode);

var obj = {
	data : 1,
	next : null,
};
var head = obj;
obj = {
	data : 2,
	next : null,
};
head.next = obj;
console.log (head);