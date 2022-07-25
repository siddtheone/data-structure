import { Node, Stack } from ".";

describe.skip("stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("intialize node and stack", () => {
    expect(new Node(2)).toEqual({ value: 2, next: null });
    expect(stack).toEqual({ first: null, last: null, size: 0 });
  });

  it("can push and pop values to stack", () => {
    expect(stack.push(1)).toBe(1);
    expect(stack.first.value).toEqual(stack.last.value);
    expect(stack.size).toEqual(1);

    expect(stack.push(2)).toBe(2);
    expect(stack.first.value).toEqual(2);
    expect(stack.last.value).toEqual(1);
    expect(stack.size).toEqual(2);

    expect(stack.first.next.value).toBe(1);

    expect(stack.pop()).toBe(2);
    expect(stack.first.value).toEqual(stack.last.value);
    expect(stack.size).toEqual(1);

    expect(stack.pop()).toBe(1);
    expect(stack).toEqual({ first: null, last: null, size: 0 });

    expect(stack.pop()).toBeNull();
  });
});
