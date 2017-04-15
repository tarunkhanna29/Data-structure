var BST = require ("./BinarySearchTree");

var newBST = new BST.BST();
newBST.postOrder ();
newBST.printLevelOrder ();
newBST.addNode ();
newBST.addNode ();
newBST.addNode (5);
newBST.addNode ();
newBST.addNode (7);
newBST.addNode (9);
newBST.addNode (6.5);
newBST.printLevelOrder ();
newBST.postOrder ();