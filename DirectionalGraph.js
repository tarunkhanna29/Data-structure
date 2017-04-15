//Directional Graph
var Graph = function() {
	this.edges = {};	
}

Graph.prototype.addVertex = function(vertex) {
	var strVertex = JSON.stringify (vertex);
	if (!this.edges[strVertex]) {
		this.edges[strVertex] = [];
		return true;
	}
	return false;
}

Graph.prototype.removeVertex = function (vertex) {
	var strVertex = JSON.stringify (vertex);
	if (this.edges[strVertex]) {
		delete this.edges [strVertex];
		for (var key in this.edges) {			
			if (this.edges[key].indexOf (vertex) > -1) {
				this.edges[key].splice (this.edges[key].indexOf (vertex), 1);
			}
		}
		return true;
	}
	return false;
}

Graph.prototype.addEdge = function (vertex1, vertex2) {
	var strVertex1 = JSON.stringify (vertex1);
	var strVertex2 = JSON.stringify (vertex2);
	if (this.edges[strVertex1] && this.edges[strVertex2] && (this.edges[strVertex1].indexOf (vertex2) == -1)) {
		this.edges[strVertex1].push (vertex2);			//Vertex1 and Vertex2 remains as reference in this.edges[strVertex] object. But key in this.edges are values because those are converted to JSON.stringify.
		return true;
	}
	return false;
}

Graph.prototype.removeEdge = function (vertex1, vertex2) {
	var strVertex1 = JSON.stringify (vertex1);	
	var strVertex2 = JSON.stringify (vertex2);	
	if (this.edges[strVertex1] && this.edges[strVertex2] && this.edges[strVertex1].indexOf (vertex2) > -1) {
		this.edges[strVertex1].splice (this.edges[strVertex1].indexOf (vertex2), 1);
		return true;
	}
	return false;
}

Graph.prototype.printGraph = function () {
	for (var key in this.edges) {
		console.log ("\n<-- New Vertex -->");
		console.log (key);
		var i = 0;
		for (i=0; i<this.edges[key].length; i++) {
			console.log (this.edges[key][i]);
		}
	}
}

module.exports.Graph = Graph;