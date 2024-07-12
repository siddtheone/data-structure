import { Node, SinglyLinkedList } from "./linked-list-with-length";

test("node", () => {
  const node = new Node(5);
  expect(node).toEqual({ value: 5, next: null });
});

test("push in singly linked list", () => {
  const sll = new SinglyLinkedList();
  expect(sll.push(4)).toBe(1);
  expect(sll.push(5)).toBe(2);
  expect(sll.length).toBe(2);
});

test("pop from singly linked list", () => {
  const sll = new SinglyLinkedList();

  expect(sll.pop()).toBe(undefined);
  sll.push(1);
  sll.push(2);
  sll.push(3);
  sll.push(4);

  expect(sll.pop()).toEqual({ value: 4, next: null });
  expect(sll.pop()).toEqual({ value: 3, next: null });
  expect(sll.length).toBe(2);
  expect(sll.pop()).toEqual({ value: 2, next: null });
  expect(sll.pop()).toEqual({ value: 1, next: null });
  expect(sll.length).toBe(0);
  expect([sll.head, sll.tail]).toEqual([null, null]);

  expect(sll.pop()).toBe(undefined);
});

test("shift from singly linked list", () => {
  const sll = new SinglyLinkedList();

  expect(sll.shift()).toBe(undefined);
  sll.push(1);
  sll.push(2);
  sll.push(3);
  sll.push(4);

  const firstShiftRes = sll.shift();
  expect(firstShiftRes.value).toBe(1);
  expect(firstShiftRes.next).toBe(null);

  expect(sll.shift().value).toBe(2);
  expect(sll.length).toBe(2);
  expect(sll.shift().value).toBe(3);
  expect(sll.shift().value).toBe(4);
  expect(sll.length).toBe(0);
  expect(sll.shift()).toBe(undefined);
  expect([sll.head, sll.tail]).toEqual([null, null]);
});

test("unshift linked list", () => {
  const sll = new SinglyLinkedList();
  expect([sll.head, sll.tail]).toEqual([null, null]);
  expect(sll.unshift(1)).toBe(1);
  expect(sll.head.value).toBe(1);
  expect(sll.tail.value).toBe(1);
  expect(sll.head.next).toBeNull();
  expect(sll.tail.next).toBeNull();

  expect(sll.unshift(0)).toBe(2);
  expect(sll.head.value).toBe(0);
  expect(sll.head.next).toBe(sll.tail);
  expect(sll.tail.value).toBe(1);
  expect(sll.tail.next).toBeNull();
});

test("get linked list", () => {
  const sll = new SinglyLinkedList();
  expect(sll.get(500)).toBeUndefined();

  sll.push(2);
  sll.push(3);
  sll.push(4);

  expect(sll.get(0).value).toBe(2);
  expect(sll.get(1).value).toBe(3);
  expect(sll.get(2).value).toBe(4);
  expect(sll.get(3)).toBeUndefined();
  expect(sll.get(-1)).toBeUndefined();
});

test("set linked list", () => {
  const sll = new SinglyLinkedList();

  sll.push(2);
  sll.push(3);
  sll.push(4);

  const oldLength = sll.length;
  expect(sll.get(1).value).toBe(3);

  const newVal = "Boo";
  sll.set(1, newVal);

  expect(sll.get(1).value).toBe(newVal);
  expect(oldLength).toBe(sll.length);
});

test("insert linked list", () => {
  const sll = new SinglyLinkedList();
  expect(sll.length).toBe(0);

  expect(sll.insert(-1, -1)).toBeFalsy();
  expect(sll.insert(0, 0)).toBe(1);

  sll.push(1);

  const newValue = -1;
  expect(sll.insert(0, newValue)).toBeTruthy();

  expect(sll.length).toBe(3);

  expect(sll.insert(1, 1)).toBeTruthy();
  expect(sll.length).toBe(4);

  expect(sll.insert(6, 6)).toBeFalsy();
});

describe("remove from sll", () => {
  let sll;
  beforeEach(() => {
    sll = new SinglyLinkedList();
    sll.push(0);
    sll.push(1);
    sll.push(2);
  });

  it("removed from the beginning", () => {
    const removedNode = sll.remove(0);
    expect(removedNode.value).toBe(0);
    expect(removedNode.next).toBe(null);
    expect(sll.length).toBe(2);
    expect(sll.get(0).value).toBe(1);
  });

  it("removed from the middle", () => {
    const removedNode = sll.remove(1);
    expect(removedNode.value).toBe(1);
    expect(removedNode.next).toBe(null);
    expect(sll.length).toBe(2);
    expect(sll.get(1).value).toBe(2);
  });

  it("removed from the end", () => {
    expect(sll.remove(2).value).toBe(2);
    expect(sll.length).toBe(2);
    expect(sll.get(2)).toBeUndefined();
  });

  it("can't remove from the invalid indexes", () => {
    expect(sll.remove(-1)).toBeUndefined();
    expect(sll.remove(3)).toBeUndefined();

    expect(sll.length).toBe(3);
  });
});

test.skip("reverse", () => {
  const sll = new SinglyLinkedList();
  sll.push(0);
  sll.push(1);
  sll.push(2);

  sll.reverse();

  expect(sll.length).toBe(3);
  expect(sll.get(0).value).toBe(2);
  expect(sll.get(1).value).toBe(1);
  expect(sll.get(2).value).toBe(0);
});

test("length getter", () => {
  const sll = new SinglyLinkedList();
  sll.push(1);
  sll.push(1);
  sll.push(1);

  expect(sll.length).toBe(3);
});
