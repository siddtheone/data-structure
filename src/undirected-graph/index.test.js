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
});
