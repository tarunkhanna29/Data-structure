var Graph = require ("./DirectionalGraph");

var Vertex = function (data) {
	this.data = data;
}

var newGraph = new Graph.Graph();
var v1 = new Vertex (5);
var v2 = 7;
var v3 = {data : 9};
var v4 = new Vertex (10);
var v5 = new Vertex (11);
var v6 = new Vertex (12);
console.log (newGraph.addVertex (v1));
console.log (newGraph.addVertex (v1));
console.log (newGraph.addVertex (v2));
console.log (newGraph.addVertex (v3));
console.log (newGraph.addVertex (v4));
console.log (newGraph.addVertex (v5));
console.log (newGraph.addVertex (v6));
console.log (newGraph.addEdge (v1, v2));
console.log (newGraph.addEdge (v1, v3));
console.log (newGraph.addEdge (v1, v3));
console.log (newGraph.removeVertex (v2));
console.log (newGraph.removeVertex (v2));
console.log (newGraph.addVertex (v2));
console.log (newGraph.addEdge (v1, v2));
console.log (newGraph.removeEdge (v1, v3));
console.log (newGraph.removeEdge (v1, v3));
console.log (newGraph.addEdge (v1, v4));
console.log (newGraph.addEdge (v2, v5));
console.log (newGraph.addEdge (v5, v6));
console.log (newGraph);
newGraph.printGraph ();