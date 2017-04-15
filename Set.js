var DisjointSet = function () {
	this.Node = function (data, parent, rank) {
		this.data = data;
		this.parent = parent;
		this.rank = rank;
	};

	this.Node = function () {
		this.data;
		this.parent;
		this.rank;
	}

	this.Map = {};
}

DisjointSet.prototype.makeSet = function (data) {
	var newNode = new this.Node ();
	newNode.data = data;
	newNode.parent = newNode;
	newNode.rank = 0;
	this.Map[data] = newNode;
}

DisjointSet.prototype.unionSet = function (data1, data2) {
	if (!this.Map[data1] || !this.Map[data2]) return;
	var parent1 = this.getParent (this.Map[data1]);
	var parent2 = this.getParent (this.Map[data2]);
	if (parent1 == parent2) return;
	if (parent1.rank >= parent2.rank) {
		parent2.parent = parent1;
		parent1.rank = (parent1.rank > parent2.rank + 1) ? parent1.rank : parent2.rank + 1;
		parent2.rank = 0;
	} else {
		parent1.parent = parent2;
		parent1.rank = 0;
	}
}

DisjointSet.prototype.getParent = function (node) {
	if (!node) return;
	var parent = node['parent'];
	if (node == parent) {
		return parent;
	}
	return this.getParent (parent);
}

DisjointSet.prototype.printSets = function () {
	for (var key in this.Map) {
		var node = this.Map[key];
		console.log ("Data " + key + " Parent " + this.getParent (node).data + " rank " + node.rank);
	}
}

module.exports.DisjointSet = DisjointSet;