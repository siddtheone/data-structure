export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    const indexOfV2 = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(indexOfV2, 1);

    const indexOfV1 = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v2].splice(indexOfV1, 1);
  }

  removeVertex(node) {
    delete this.adjacencyList[node];

    Object.keys(this.adjacencyList).forEach((nodeInGraph) => {
      const nodeIndex = this.adjacencyList[nodeInGraph].indexOf(node);
      this.adjacencyList[nodeInGraph].splice(nodeIndex, 1);
    });
  }
}
