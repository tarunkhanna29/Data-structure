//Un-Directional Graph
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
	if (this.edges[strVertex1] && this.edges[strVertex2] && (this.edges[strVertex1].indexOf (vertex2) == -1) && (this.edges[strVertex2].indexOf (vertex1) == -1)) {
		this.edges[strVertex1].push (vertex2);			//Vertex1 and Vertex2 remains as reference in this.edges[strVertex] object. But key in this.edges are values because those are converted to JSON.stringify.
		this.edges[strVertex2].push (vertex1);
		return true;
	}
	return false;
}

Graph.prototype.removeEdge = function (vertex1, vertex2) {
	var strVertex1 = JSON.stringify (vertex1);	
	var strVertex2 = JSON.stringify (vertex2);	
	if (this.edges[strVertex1] && this.edges[strVertex2] && this.edges[strVertex1].indexOf (vertex2) > -1 && this.edges[strVertex2].indexOf (vertex1) > -1) {
		this.edges[strVertex1].splice (this.edges[strVertex1].indexOf (vertex2), 1);
		this.edges[strVertex2].splice (this.edges[strVertex2].indexOf (vertex1), 1);
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

Graph.prototype.Dfs = function (vertex, fn) {	
	if (!this.edges[JSON.stringify(vertex)]) {
		fn ("Vertex " + JSON.stringify (vertex) + " doesn't exist.");
		return;
	}
	var visited = [];
	DfsUtil (this.edges, vertex, visited, fn);
}

var DfsUtil = function (myObj, vertex, visited, fnc) {
	var strVertex = JSON.stringify (vertex);
	var arr = myObj [strVertex];
	if (!arr) {
		fnc ("Vertex " + strVertex + " doesn't exist.");
		return;
	}
	visited [strVertex] = true;
	fnc ("Vertex " + strVertex + " visited.");
	for (var i=0; i<arr.length; i++) {
		if (!visited[JSON.stringify (arr[i])]) {
			DfsUtil (myObj, arr[i], visited, fnc);
		}
	}
}

Graph.prototype.Bfs = function (vertex, fn) {
	if (!this.edges[JSON.stringify (vertex)]) {
		fn ("Vertex " + JSON.stringify (vertex) + " doesn't exist.");
		return;
	}
	var visited = [];
	BfsUtil (this.edges, vertex, visited, fn);
}

var BfsUtil = function (myObj, vertex, visited, fnc) {
	if (!myObj) {
		fnc ("Object not found");
	}
	var Queue = [];
	Queue.push (vertex);
	visited[JSON.stringify (vertex)] = true;
	fnc ("Vertex " + JSON.stringify (vertex) + " visited");
	while (Queue.length > 0) {
		var strVertex = JSON.stringify (Queue.shift());
		var arr = myObj[strVertex];
		for (var i=0; i<arr.length; i++) {
			if (!visited[JSON.stringify(arr[i])]) {
				Queue.push (arr[i]);
				fnc ("Vertex " + JSON.stringify (arr[i]) + " visited");
				visited[JSON.stringify(arr[i])] = true;
			}
		}
	}
}

Graph.prototype.IsPathExists = function (vertex1, vertex2) {
	var strVertex1 = JSON.stringify (vertex1);
	var strVertex2 = JSON.stringify (vertex2);
	if (this.edges[strVertex1] && this.edges[strVertex2]) {
		var Queue = [];
		var visited = [];
		Queue.push (vertex1);
		while (Queue.length > 0) {
			var strVertex = JSON.stringify (Queue.shift());
			if (this.edges[strVertex]) {
				var arr = this.edges[strVertex];
				for (var i=0; i<arr.length; i++) {
					if (arr[i] == vertex2) {
						return true;
					}
					if (!visited[JSON.stringify (arr[i])]) {
						visited[JSON.stringify (arr[i])] = true;
						Queue.push (arr[i]);
					}
				}
			}
		}
	}
	return false;
}

module.exports.Graph = Graph;