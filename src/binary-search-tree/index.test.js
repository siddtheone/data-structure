import { BinarySearchTree, Node } from ".";

describe("Binary search tree", () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });
  it("initialize bst object and node", () => {
    expect(new Node(0)).toEqual({ value: 0, left: null, right: null });
    expect(bst).toEqual({ root: null });
  });

  it("insert values to bst", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(50);
    console.log(bst);
  });
});
