import { WeightedGraph } from ".";

describe("Weighted graph", () => {
  let wg;
  beforeEach(() => {
    wg = new WeightedGraph();
  });
  it("creates a weighted graph with empty adjacency list", () => {
    expect(wg.adjacencyList).toEqual({});
  });
  it("adds a node to weighted graph", () => {
    wg.addVertex("v1");
    expect(wg.adjacencyList).toEqual({ v1: [] });
  });
  it("adds an edge to weighted graph", () => {
    wg.addVertex("A");
    wg.addVertex("B");
    expect(wg.adjacencyList).toEqual({ A: [], B: [] });

    wg.addEdge("A", "B", 5);

    // expect(wg.adjacencyList).toEqual(
    //   { A: [{ node: "B", weight: 5 }] },
    //   { B: [{ node: "A", weight: 5 }] }
    // );
    console.log(JSON.stringify(wg.adjacencyList));
  });
});
