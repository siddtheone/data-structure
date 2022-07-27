import { Node, Queue } from ".";

describe.skip("queue", () => {
  let q;

  beforeEach(() => {
    q = new Queue();
  });

  it("initialize node and queue", () => {
    expect(q).toEqual({ first: null, last: null, size: 0 });
    expect(new Node(1)).toEqual({ value: 1, next: null });
  });

  it("can enqueue/dequeue to queue", () => {
    expect(q.enqueue(0)).toBe(1);

    expect(q.first.value).toBe(q.last.value);
    expect(q.size).toBe(1);

    expect(q.enqueue(1)).toBe(2);
    expect(q.size).toBe(2);
    expect(q.first.value).toBe(0);
    expect(q.last.value).toBe(1);
    expect(q.first.next.value).toBe(1);

    expect(q.dequeue()).toBe(0);
    expect(q.size).toBe(1);
    expect(q.first.value).toBe(q.last.value);

    expect(q.dequeue()).toBe(1);
    expect(q).toEqual({ first: null, last: null, size: 0 });
    expect(q.dequeue()).toBeNull();
  });
});
