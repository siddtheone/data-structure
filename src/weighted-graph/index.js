export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  shortestPath(source, destination) {
    const shortestPathToOtherFromSource = {};
    const previous = {};
    Object.keys(this.adjacencyList).forEach((node) => {
      shortestPathToOtherFromSource[node] = node === source ? 0 : Infinity;
      previous[node] = null;
    });
    const visited = {};

    while (!(destination in visited)) {
      const current = this._getTheNodeOfShortedDistance(
        shortestPathToOtherFromSource,
        visited
      );

      const currentDistance = shortestPathToOtherFromSource[current];
      visited[current] = true;

      const currentNeighbours = this.adjacencyList[current];

      currentNeighbours.forEach(({ node, weight }) => {
        const newDistance = currentDistance + weight;
        if (newDistance < shortestPathToOtherFromSource[node]) {
          shortestPathToOtherFromSource[node] = newDistance;
          previous[node] = current;
        }
      });
    }

    return previous;
  }

  _getTheNodeOfShortedDistance(shortedPath, visited) {
    let shortedDistance = Infinity;
    let nodeToPick;
    Object.entries(shortedPath).forEach(([node, distance]) => {
      if (!(node in visited) && distance < shortedDistance) {
        nodeToPick = node;
        shortedDistance = distance;
      }
    });
    return nodeToPick;
  }
}
