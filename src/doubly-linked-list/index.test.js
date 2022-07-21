import { DoublyLinkedList, Node } from ".";

describe("doubly linked list", () => {
  let dll;

  beforeEach(() => {
    dll = new DoublyLinkedList();
  });

  it.only("gets the item from list via shortest path", () => {
    const cLog = jest.spyOn(console, "test");
    for (let i = 0; i < 10; i++) {
      dll.push(i);
    }

    expect(dll.get(7).value).toBe(7);
    expect(cLog).toHaveBeenCalledTimes(2);
  });

  it("gets the item from list", () => {
    for (let i = 0; i < 10; i++) {
      dll.push(i);
    }

    expect(dll.get(0).value).toBe(0);
    expect(dll.get(1).value).toBe(1);
    expect(dll.get(2).value).toBe(2);
    expect(dll.get(9).value).toBe(9);
    expect(dll.get(8).value).toBe(8);
    expect(dll.get(7).value).toBe(7);

    expect(dll.get(-1)).toBeUndefined();
    expect(dll.get(10)).toBeUndefined();
  });

  it("returns the newly added element to the doubly linked list at the beginning", () => {
    expect(dll.length).toBe(0);
    expect(dll.unshift(1)).toEqual({ value: 1, next: null, prev: null });
    expect(dll.length).toBe(1);

    expect(dll.unshift(0).value).toBe(0);
    expect(dll.length).toBe(2);
    expect(dll.head.next.prev).not.toBeNull();

    expect(dll.unshift(-1).value).toBe(-1);
    expect(dll.length).toBe(3);
  });

  it("shifting on empty list shouldn't affect the list", () => {
    expect(dll.shift()).toBe(undefined);
    expect(dll.length).toBe(0);
  });

  it("Can shift elements from doubly linked list", () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    let preLength = dll.length;
    expect(dll.shift()).toEqual({ value: 1, next: null, prev: null });
    expect(dll.head.prev).toBeNull();
    expect(dll.head.value).toBe(2);
    expect(dll.length).toBe(--preLength);
    expect(dll.shift()).toEqual({ value: 2, next: null, prev: null });
    expect(dll.length).toBe(--preLength);
    expect(dll.shift()).toEqual({ value: 3, next: null, prev: null });
    expect(dll.length).toBe(--preLength);
    expect(dll.shift()).toBeUndefined();
    expect(dll.length).toBe(0);
  });

  it("Using pop on empty list should return undefined, shouldn't alter the length", () => {
    expect(dll.pop()).toBe(undefined);
    expect(dll.length).toBe(0);
  });

  it("Can pop elements from doubly linked list", () => {
    dll.push(1);
    dll.push(2);
    dll.push(3);

    let preLength = dll.length;
    expect(dll.pop()).toEqual({ value: 3, next: null, prev: null });
    expect(dll.tail.next).toBeNull();
    expect(dll.tail.value).toBe(2);
    expect(dll.length).toBe(--preLength);
    expect(dll.pop()).toEqual({ value: 2, next: null, prev: null });
    expect(dll.length).toBe(--preLength);
    expect(dll.pop()).toEqual({ value: 1, next: null, prev: null });
    expect(dll.length).toBe(--preLength);
    expect(dll.pop()).toBeUndefined();
    expect(dll.length).toBe(0);
  });

  it("pop should return last item from the list and decrement the length by 1", () => {
    dll.push(0);
    const oldLength = dll.length;
    expect(dll.pop()).toEqual({ value: 0, next: null, prev: null });
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(oldLength - 1);

    dll.push(1);
    dll.push(2);
    expect(dll.pop()).toEqual({ value: 2, next: null, prev: null });
    expect(dll.head.value).toBe(dll.tail.value);
    expect(dll.length).toBe(1);
  });

  it("can push elements in end", () => {
    expect(dll.length).toBe(0);

    const newValue = 0;
    expect(dll.push(newValue).value).toBe(newValue);

    expect(dll.length).toBe(1);
    expect(dll.head.value).toBe(newValue);
    expect(dll.tail.value).toBe(newValue);
  });
});

it("test Doubly linked list instance", () => {
  const node = new DoublyLinkedList(2);
  expect(node).toEqual({ length: 0, head: null, tail: null });
});

it("test node instance", () => {
  const node = new Node(2);
  expect(node).toEqual({ value: 2, next: null, prev: null });
});
