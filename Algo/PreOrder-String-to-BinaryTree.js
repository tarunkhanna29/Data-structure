class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  if (!str || str.length === 0) {
    return null;
  }
  return buildTreeUtil(str, 0);
}

function buildTreeUtil(str, index) {
  if (index >= str.length) {
    return [null, index];
  }
  const node = new Node(str[index]);
  if (str[index] === "L") {
    return [node, index];
  }
  [node.left, index] = buildTreeUtil(str, index + 1);
  [node.right, index] = buildTreeUtil(str, index + 1);
  return [node, index];
}

const [root, _] = buildTree("IIILLLILILL");
printTree(root);

function printTree(root) {
  if (!root) {
    return;
  }

  const queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelNodes.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    console.log(levelNodes.join(" "));
  }
}
