class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    const arr = this.adjacencyList[vertex];
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = arr.pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    const arr1 = this.adjacencyList[vertex1];
    if (arr1) arr1 = arr1.filter((ele) => ele != vertex2);
    if (arr2) arr2 = arr2.filter((ele) => ele != vertex1);
  }

  printGraph() {
    for (const key in this.adjacencyList) {
      console.log(key);
      const arr = this.adjacencyList[key];
      console.log(arr.join(" "));
      console.log("\n");
    }
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.printGraph();
console.log(g.adjacencyList);
