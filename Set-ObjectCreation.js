var DisjointSet = require ("./Set");

var newDisjointSet = new DisjointSet.DisjointSet();
newDisjointSet.makeSet ('a');
newDisjointSet.makeSet ('b');
newDisjointSet.makeSet ('c');
newDisjointSet.makeSet ('d');
newDisjointSet.makeSet ('e');
newDisjointSet.makeSet ('f');
newDisjointSet.makeSet ('g');
newDisjointSet.makeSet ('m', 'x');
newDisjointSet.unionSet ('a', 'b');
newDisjointSet.unionSet ('b', 'c');
newDisjointSet.unionSet ('d', 'e');
newDisjointSet.unionSet ('f', 'g');
newDisjointSet.unionSet ('e', 'f');
newDisjointSet.unionSet ('c', 'g');
newDisjointSet.printSets ();