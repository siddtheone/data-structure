import { BinarySearchTree } from "../binary-search-tree";
import { breadthFirst } from "./breadth-first";

it("traverse the tree with breadth first", () => {
  const tree = new BinarySearchTree();
  [10, 15, 6, 20, 8, 3].forEach((node) => tree.insert(node));
  expect(breadthFirst(tree)).toEqual([10, 6, 15, 3, 8, 20]);
});
