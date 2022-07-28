export function depthFirstPreOrder(tree) {
  if (tree.root === null) return [null];

  const nodes = [];
  function preOrder(node) {
    nodes.push(node.value);
    if (node.left) preOrder(node.left);
    if (node.right) preOrder(node.right);
  }
  preOrder(tree.root);

  return nodes;
}
export function depthFirstInOrder(tree) {
  if (tree.root === null) return [null];

  const nodes = [];
  function inOrder(node) {
    if (node.left) inOrder(node.left);
    nodes.push(node.value);
    if (node.right) inOrder(node.right);
  }
  inOrder(tree.root);

  return nodes;
}
export function depthFirstPostOrder(tree) {
  if (tree.root === null) return [null];

  const nodes = [];
  function postOrder(node) {
    if (node.left) postOrder(node.left);
    if (node.right) postOrder(node.right);
    nodes.push(node.value);
  }
  postOrder(tree.root);

  return nodes;
}
