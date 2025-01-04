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

const linkedList1 = new LinkedListClass.LinkedList();
const linkedList2 = new LinkedListClass.LinkedList();
linkedList1.addNewNodeAtEnd(1);
linkedList1.addNewNodeAtEnd(3);
linkedList1.addNewNodeAtEnd(6);
linkedList1.addNewNodeAtEnd(10);
linkedList1.addNewNodeAtEnd(12);
linkedList2.addNewNodeAtEnd(2);
linkedList2.addNewNodeAtEnd(3);
linkedList2.addNewNodeAtEnd(5);
linkedList2.addNewNodeAtEnd(7);
linkedList2.addNewNodeAtEnd(8);
linkedList2.addNewNodeAtEnd(9);
linkedList2.addNewNodeAtEnd(14);
linkedList2.addNewNodeAtEnd(15);
linkedList2.addNewNodeAtEnd(16);
linkedList1.print();
linkedList2.print();

const newHead = sortLinkedLists(linkedList1.getHeadNode(), linkedList2.head);
printAnyLinkedList(newHead);

function printAnyLinkedList(head) {
  let tmp = head;
  while (tmp != null) {
    console.log(tmp.data);
    tmp = tmp.next;
  }
}

function sortLinkedLists(h1, h2) {
  if (h1 == null) {
    return h2;
  }
  if (h2 == null) {
    return h1;
  }
  if (h1.data < h2.data) {
    h1.next = sortLinkedLists(h1.next, h2);
    return h1;
  }
  h2.next = sortLinkedLists(h1, h2.next);
  return h2;
}
