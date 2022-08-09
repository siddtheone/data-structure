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

    expect(wg.adjacencyList).toEqual({
      A: [{ node: "B", weight: 5 }],
      B: [{ node: "A", weight: 5 }]
    });
  });

  it("finds shortest path by dijkstra's algorithm", () => {
    wg.addVertex("A");
    wg.addVertex("B");
    wg.addVertex("C");
    wg.addVertex("D");
    wg.addVertex("E");
    wg.addVertex("F");

    wg.addEdge("A", "B", 4);
    wg.addEdge("A", "C", 2);
    wg.addEdge("B", "E", 3);
    wg.addEdge("C", "D", 2);
    wg.addEdge("C", "F", 4);
    wg.addEdge("D", "E", 3);
    wg.addEdge("D", "F", 1);
    wg.addEdge("E", "F", 1);

    expect(wg.shortestPath("A", "E")).toEqual({
      A: null,
      B: "A",
      C: "A",
      D: "C",
      E: "F",
      F: "D"
    });
  });
});
