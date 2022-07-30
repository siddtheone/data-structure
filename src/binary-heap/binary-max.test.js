import { MaxBinaryHeap } from "./binary-max";

it("inserts values in binary max heap", () => {
  const maxHeap = new MaxBinaryHeap();

  expect(maxHeap.values).toEqual([]);

  maxHeap.insert(100);
  expect(maxHeap.values).toEqual([100]);

  maxHeap.insert(200);
  expect(maxHeap.values).toEqual([200, 100]);

  maxHeap.insert(300);
  expect(maxHeap.values).toEqual([300, 100, 200]);

  maxHeap.insert(400);
  expect(maxHeap.values).toEqual([400, 300, 200, 100]);

  maxHeap.insert(500);
  expect(maxHeap.values).toEqual([500, 400, 200, 100, 300]);
});

it("removes max value from binary max heap", () => {
  const noElementsHeap = new MaxBinaryHeap();
  expect(noElementsHeap.extractMax()).toBeUndefined();
  expect(noElementsHeap.values).toEqual([]);

  const singleElementHeap = new MaxBinaryHeap();
  singleElementHeap.insert(1);
  expect(singleElementHeap.extractMax()).toEqual(1);
  expect(singleElementHeap.values).toEqual([]);

  const twoElementsHeap = new MaxBinaryHeap();
  twoElementsHeap.insert(1);
  twoElementsHeap.insert(2);
  expect(twoElementsHeap.extractMax()).toBe(2);
  expect(twoElementsHeap.values).toEqual([1]);
  expect(twoElementsHeap.extractMax()).toBe(1);
  expect(twoElementsHeap.values).toEqual([]);

  const test = new MaxBinaryHeap();
  for (let i = 1; i < 101; i++) {
    test.insert(i);
  }
  for (let i = 100; i >= 1; i--) {
    expect(test.extractMax()).toBe(i);
  }
});
