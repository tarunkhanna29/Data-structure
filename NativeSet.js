const set = new Set();
set.add(1);
set.add(2);
set.add("hello");
console.log(set.has(1));
console.log(set.has(3));
console.log(set.has("hello"));

const arr = [1, 2, 3, 4, 5];
set.add(arr);
const tmpSet = new Set(arr);
console.log(tmpSet);
console.log(set);
console.log(set.has(arr));
console.log(set.has([1, 2, 3, 4, 5]));

set.add([1, 2, 3, 4, 5]);
console.log(set);
console.log(set.has([1, 2, 3, 4, 5]));

const arr1 = [1, 2, 3];
const arr2 = [1, 2];
const arr3 = [10, 20, 30, 40];
set.add(arr1, arr2, arr3);
console.log(set);

console.log(set.has(arr1, arr2, arr3));
console.log(set.has(arr2));

set.add([...arr1, ...arr2, ...arr3]);
set.has(20);
console.log(set);

const set1 = new Set();
const arr10 = [1, 2, 3];
const arr11 = [11, 22, 33];
arr10.forEach((item) => set1.add(item));
arr11.forEach((item) => set1.add(item));
console.log(set1);
console.log(set1.has(22));

// Delete item from set based on order of insertion
const mySet1 = new Set();
mySet1.add(5);
mySet1.add(2);
mySet1.add(3);
mySet1.add(6);
mySet1.add(1);
const val = mySet1.values().next().value;
mySet1.delete(val);
console.log(val);
console.log(mySet1);

class Node {
  constructor(data) {
    this.data = data;
  }
}

const mySet2 = new Set();
mySet2.add(new Node(5));
mySet2.add(new Node(2));
mySet2.add(new Node(3));
mySet2.add(new Node(6));
mySet2.add(new Node(1));
console.log(mySet2);
const node = mySet2.values().next().value;
console.log(node.data);
mySet2.delete(node);
console.log(mySet2);
