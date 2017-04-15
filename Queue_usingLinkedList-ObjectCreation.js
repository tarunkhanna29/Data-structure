var Queue = require ("./Queue_usingLinkedList");

var myQueue = new Queue.Queue();
myQueue.dequeue ();
myQueue.enqueue (1);
myQueue.enqueue (2);
myQueue.dequeue ();
myQueue.enqueue (3);
myQueue.print ();