export function depthFirstPreOrder(tree) {
  const nodes = [];
  function preOrder(node) {
    node?.value && nodes.push(node.value);
    node?.left && preOrder(node.left);
    node?.right && preOrder(node.right);
  }
  preOrder(tree.root);

  return nodes;
}
export function depthFirstInOrder(tree) {
  const nodes = [];
  function inOrder(node) {
    node?.left && inOrder(node.left);
    node?.value && nodes.push(node.value);
    node?.right && inOrder(node.right);
  }
  inOrder(tree.root);

  return nodes;
}
export function depthFirstPostOrder(tree) {
  const nodes = [];
  function postOrder(node) {
    node?.left && postOrder(node.left);
    node?.right && postOrder(node.right);
    node?.value && nodes.push(node.value);
  }
  postOrder(tree.root);

  return nodes;
}
