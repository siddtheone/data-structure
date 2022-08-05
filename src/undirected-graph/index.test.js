import { Graph } from ".";

describe("Undirected graph", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });

  test("Graph instance", () => {
    expect(graph.adjacencyList).toEqual({});
  });

  test("adding vertex to graph", () => {
    const vertex = "v1";
    graph.addVertex(vertex);
    expect(graph.adjacencyList).toEqual({ v1: [] });

    const vertex2 = "v2";
    graph.addVertex(vertex2);
    expect(graph.adjacencyList).toEqual({ v1: [], v2: [] });
  });

  test("adding edge to the graph", () => {
    const vertex1 = "v1",
      vertex2 = "v2";
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);

    graph.addEdge(vertex1, vertex2);

    expect(graph.adjacencyList).toEqual({
      v1: ["v2"],
      v2: ["v1"]
    });
  });

  test("removing edge from the graph", () => {
    const vertex1 = "v1",
      vertex2 = "v2";
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);

    graph.addEdge(vertex1, vertex2);
    graph.removeEdge(vertex1, vertex2);
    expect(graph.adjacencyList).toEqual({ v1: [], v2: [] });
  });

  test("removing edge from the graph", () => {
    const v1 = "v1",
      v2 = "v2",
      v3 = "v3";
    graph.addVertex(v1);
    graph.addVertex(v2);
    graph.addVertex(v3);

    graph.addEdge(v1, v2);
    graph.addEdge(v2, v3);
    graph.addEdge(v3, v1);

    expect(graph.adjacencyList).toEqual({
      v1: ["v2", "v3"],
      v2: ["v1", "v3"],
      v3: ["v2", "v1"]
    });

    graph.removeVertex(v3);
    expect(graph.adjacencyList).toEqual({
      v1: ["v2"],
      v2: ["v1"]
    });
  });

  test("depth first traversal", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    expect(graph.depthFirstRecursive("A")).toEqual([
      "A",
      "B",
      "D",
      "E",
      "C",
      "F"
    ]);

    expect(graph.depthFirstIterative("A")).toEqual([
      "A",
      "C",
      "E",
      "F",
      "D",
      "B"
    ]);
  });

  test("breadth first traversal", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "E");
    graph.addEdge("B", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "D");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    expect(graph.breadthFirst("A")).toEqual(["A", "B", "E", "C", "D", "F"]);

    const g = new Graph();

    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("F");

    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("B", "D");
    g.addEdge("C", "E");
    g.addEdge("D", "E");
    g.addEdge("D", "F");
    g.addEdge("E", "F");
    expect(g.breadthFirst("A")).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
});
