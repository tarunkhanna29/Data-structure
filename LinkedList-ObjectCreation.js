var LinkedList = require ("./LinkedList.js");

var linkedList = new LinkedList.LinkedList();
console.log ("Removed Node " + linkedList.removeNodeFromBeg());
linkedList.removeNodeFromEnd();
linkedList.addNewNodeAtBeg (0.75);
linkedList.addNewNodeAtEnd (1);
linkedList.addNewNodeAtEnd (2);
linkedList.removeNodeFromBeg();
linkedList.addNewNodeAtBeg (0.5);
console.log ("Removed Node " + linkedList.removeNodeFromBeg());
linkedList.print();
console.log (linkedList);
console.log ("SIZE " + linkedList.linkedListSize());