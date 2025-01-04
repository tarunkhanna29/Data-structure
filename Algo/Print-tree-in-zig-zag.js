class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function zigZagTraversal(root) {
  if (!root) return [];
  const queue = [];
  queue.push(root);
  queue.push(null);
  let dirLtoR = true;
  const output = [];
  const levelOutput = [];
  while (queue.length > 0) {
    const element = queue.shift();
    if (element === null) {
      dirLtoR = !dirLtoR;
      output.push(...levelOutput);
      levelOutput.length = 0;
      if (queue.length > 0) queue.push(null);
      continue;
    }
    if (element.left) queue.push(element.left);
    if (element.right) queue.push(element.right);
    if (dirLtoR) levelOutput.push(element.value);
    else levelOutput.unshift(element.value);
  }

  return output;
}

// Example Tree Construction
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);

// Zig Zag Traversal
console.log(zigZagTraversal(root)); // Output: [1, 3, 2, 4, 5, 6, 7, 9, 8]
