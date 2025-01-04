export class LinkedList {
  constructor() {
    this.head = null;
  }

  addNewNodeAtBeg(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addNewNodeAtEnd(data) {
    let tmp = this.head;
    const newNode = new Node(data);
    if (tmp == null) {
      this.head = newNode;
      return;
    }
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    tmp.next = newNode;
  }

  print() {
    console.log("\n******");
    let tmp = this.head;
    if (tmp == null) {
      console.log("Empty list");
      return;
    }
    while (tmp != null) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
    console.log("******\n");
  }

  deleteNodeFromBeg() {
    let tmp = this.head;
    if (tmp == null) {
      return;
    }
    this.head = this.head.next;
    tmp.next = null;
  }

  deleteNodeFromEnd() {
    let tmp = this.head;
    if (tmp == null) {
      return;
    }
    while (tmp.next.next != null) {
      tmp = tmp.next;
    }
    tmp.next = null;
  }

  convertToMap() {
    const map = new Map();
    let tmp = this.head;
    while (tmp != null) {
      map.set(tmp.data, tmp);
      tmp = tmp.next;
    }
    return map;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
