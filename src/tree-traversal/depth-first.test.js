import { BinarySearchTree } from "../binary-search-tree";
import {
  depthFirstInOrder,
  depthFirstPostOrder,
  depthFirstPreOrder
} from "./depth-first";

it("traverse tree with pre order, depth first", () => {
  const tree = new BinarySearchTree();
  expect(depthFirstPostOrder(tree)).toEqual([null]);
  [10, 6, 15, 3, 8, 20].forEach((node) => tree.insert(node));
  console.log(tree);
  expect(depthFirstPreOrder(tree)).toEqual([10, 6, 3, 8, 15, 20]);
});

it("traverse tree with in order, depth first", () => {
  const tree = new BinarySearchTree();
  expect(depthFirstPostOrder(tree)).toEqual([null]);
  [10, 6, 15, 3, 8, 20].forEach((node) => tree.insert(node));
  expect(depthFirstInOrder(tree)).toEqual([3, 6, 8, 10, 15, 20]);
});

it("traverse tree with post order, depth first", () => {
  const tree = new BinarySearchTree();
  expect(depthFirstPostOrder(tree)).toEqual([null]);
  [10, 6, 15, 3, 8, 20].forEach((node) => tree.insert(node));
  expect(depthFirstPostOrder(tree)).toEqual([3, 8, 6, 20, 15, 10]);
});
