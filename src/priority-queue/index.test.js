import { Node, PriorityQueue } from ".";

test("node instance and priority queye instance", () => {
  expect(new Node("High", 1)).toEqual({ value: "High", priority: 1 });
  expect(new PriorityQueue()).toEqual({ values: [] });
});

test("enqueue in priority queye", () => {
  const pq = new PriorityQueue();

  pq.enqueue("test", 4);
  const { values } = pq;

  expect(values[0]).toHaveProperty("priority", 4);
  pq.enqueue("test", 3);
  expect(values[0]).toHaveProperty("priority", 3);
  pq.enqueue("test", 2);
  expect(values[0]).toHaveProperty("priority", 2);
  pq.enqueue("test", 1);
  expect(values[0]).toHaveProperty("priority", 1);
});

test("enque for duplicate priorities", () => {
  const pq = new PriorityQueue();
  const same = ["same", 1];
  for (let i = 0; i < 10; i++) {
    pq.enqueue(...same);
  }
  expect(pq.values.length).toBe(10);
});

test("dequeue in priority queye", () => {
  const pq = new PriorityQueue();
  const testCount = 9;
  for (let i = 1; i <= testCount; i++) {
    pq.enqueue("test", i);
  }
  for (let i = 1; i <= testCount; i++) {
    expect(pq.dequeue().priority).toBe(i);
  }

  expect(pq.dequeue()).toBeUndefined();
  expect(pq.values).toEqual([]);
});

test("dequeue works for duplicate priorities", () => {
  const duplicatePQ = new PriorityQueue();
  const samePriority = ["same", 1];
  for (let i = 0; i < 10; i++) {
    duplicatePQ.enqueue(...samePriority);
  }
  for (let i = 0; i < 10; i++) {
    expect(duplicatePQ.dequeue()).toEqual({ value: "same", priority: 1 });
  }
  expect(duplicatePQ.values.length).toBe(0);
});
