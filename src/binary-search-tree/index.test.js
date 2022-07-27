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

    expect(bst.root.value).toBe(5);
    expect(bst.root.left.value).toBe(3);
    expect(bst.root.left.left.value).toBe(1);

    expect(bst.root.right.value).toBe(10);
    expect(bst.root.right.right.value).toBe(50);

    expect(bst.insert(50)).toBeUndefined();
  });

  it("finds values in bst", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(50);

    expect(bst.find(50)).toBeTruthy();
    expect(bst.find(1)).toBeTruthy();
    expect(bst.find(10)).toBeTruthy();
    expect(bst.find(3)).toBeTruthy();
    expect(bst.find(5)).toBeTruthy();
    expect(bst.find(100)).toBeFalsy();
    expect(bst.find("anythingelse")).toBeFalsy();
  });
});
