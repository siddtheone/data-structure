import { MaxBinaryHeap } from "./binary-max";

it("inserts values in binary max heap", () => {
  const maxHeap = new MaxBinaryHeap();

  expect(maxHeap.values).toEqual([]);

  expect(maxHeap.insert(100));

  console.log(maxHeap.values);

  expect(maxHeap.insert(200));
  console.log(maxHeap.values);

  expect(maxHeap.insert(300));
  console.log(maxHeap.values);

  expect(maxHeap.insert(400));
  console.log(maxHeap.values);

  expect(maxHeap.insert(4));
  console.log(maxHeap.values);
});
