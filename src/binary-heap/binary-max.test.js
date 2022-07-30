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

it("insert works for duplicate values", () => {
  const maxHeap = new MaxBinaryHeap();
  for (let i = 0; i < 10; i++) {
    maxHeap.insert(0);
  }

  expect(maxHeap.values.length).toBe(10);
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
  const items = 9;
  for (let i = items; i >= 1; i--) {
    test.insert(i);
  }
  for (let i = items; i >= 1; i--) {
    expect(test.extractMax()).toBe(i);
  }

  const mbh = new MaxBinaryHeap();
  [88, 61, 67, 42, 54, 58, 53, 35, 24, 25, 36, 30, 29, 20].forEach((e) =>
    mbh.insert(e)
  );

  expect(mbh.extractMax()).toBe(88);
  expect(mbh.values).toEqual([
    67,
    61,
    58,
    42,
    54,
    30,
    53,
    35,
    24,
    25,
    36,
    20,
    29
  ]);

  expect(mbh.extractMax()).toBe(67);
  expect(mbh.values).toEqual([61, 54, 58, 42, 36, 30, 53, 35, 24, 25, 29, 20]);

  expect(mbh.extractMax()).toBe(61);
  expect(mbh.values).toEqual([58, 54, 53, 42, 36, 30, 20, 35, 24, 25, 29]);

  expect(mbh.extractMax()).toBe(58);
  expect(mbh.values).toEqual([54, 42, 53, 35, 36, 30, 20, 29, 24, 25]);

  expect(mbh.extractMax()).toBe(54);
  expect(mbh.values).toEqual([53, 42, 30, 35, 36, 25, 20, 29, 24]);

  expect(mbh.extractMax()).toBe(53);
  expect(mbh.values).toEqual([42, 36, 30, 35, 24, 25, 20, 29]);

  expect(mbh.extractMax()).toBe(42);
  expect(mbh.values).toEqual([36, 35, 30, 29, 24, 25, 20]);

  expect(mbh.extractMax()).toBe(36);
  expect(mbh.values).toEqual([35, 29, 30, 20, 24, 25]);

  expect(mbh.extractMax()).toBe(35);
  expect(mbh.values).toEqual([30, 29, 25, 20, 24]);

  expect(mbh.extractMax()).toBe(30);
  expect(mbh.values).toEqual([29, 24, 25, 20]);

  expect(mbh.extractMax()).toBe(29);
  expect(mbh.values).toEqual([25, 24, 20]);

  expect(mbh.extractMax()).toBe(25);
  expect(mbh.values).toEqual([24, 20]);

  expect(mbh.extractMax()).toBe(24);
  expect(mbh.values).toEqual([20]);

  expect(mbh.extractMax()).toBe(20);
  expect(mbh.values).toEqual([]);

  expect(mbh.extractMax()).toBeUndefined();
  expect(mbh.values).toEqual([]);
});

it("extract works for duplicate values", () => {
  const maxHeap = new MaxBinaryHeap();
  for (let i = 0; i < 10; i++) {
    maxHeap.insert(0);
  }

  for (let i = 0; i < 10; i++) {
    expect(maxHeap.extractMax()).toBe(0);
  }

  expect(maxHeap.values.length).toBe(0);
});
