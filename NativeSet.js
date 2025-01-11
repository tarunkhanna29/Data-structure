const set = new Set();
set.add(1);
set.add(2);
set.add("hello");
console.log(set.has(1));
console.log(set.has(3));
console.log(set.has("hello"));

const arr = [1, 2, 3, 4, 5];
set.add(arr);
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
