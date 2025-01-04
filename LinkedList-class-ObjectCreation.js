const LinkedListClass = require("./LinkedList-class.js");

const linkedList = new LinkedListClass.LinkedList();
linkedList.print();
linkedList.addNewNodeAtBeg(3);
linkedList.addNewNodeAtBeg(4);
linkedList.addNewNodeAtBeg(5);
linkedList.print();
linkedList.addNewNodeAtEnd(6);
linkedList.addNewNodeAtEnd(7);
linkedList.addNewNodeAtEnd(8);
linkedList.print();
linkedList.deleteNodeFromBeg();
linkedList.deleteNodeFromEnd();
linkedList.print();
linkedList.addNewNodeAtEnd(6);
linkedList.print();

const linkedListMap = linkedList.convertToMap();
console.log("Converted Map:");
console.log(linkedListMap);
let node = linkedListMap.get(6);
while (node != null) {
  console.log(node.data);
  node = node.next;
}
