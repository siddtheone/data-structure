import { PriorityQueue } from "../priority-queue";
import { Stack } from "../stack";

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

  // shortestPath(source, destination) {
  //   const shortestPathToOtherFromSource = {};
  //   const previous = {};
  //   Object.keys(this.adjacencyList).forEach((node) => {
  //     shortestPathToOtherFromSource[node] = node === source ? 0 : Infinity;
  //     previous[node] = null;
  //   });
  //   const visited = {};

  //   while (!(destination in visited)) {
  //     const current = this._getTheNodeOfShortedDistance(
  //       shortestPathToOtherFromSource,
  //       visited
  //     );

  //     const currentNeighbours = this.adjacencyList[current];

  //     for (let i = 0; i < currentNeighbours.length; i++) {
  //       const { node, weight } = currentNeighbours[i];

  //       if (node in visited) {
  //         continue;
  //       }

  //       const currentDistance = shortestPathToOtherFromSource[current];
  //       const newDistance = currentDistance + weight;
  //       if (newDistance < shortestPathToOtherFromSource[node]) {
  //         shortestPathToOtherFromSource[node] = newDistance;
  //         previous[node] = current;
  //       }
  //     }
  //     visited[current] = true;
  //   }

  //   return previous;
  // }

  // _getTheNodeOfShortedDistance(shortedPath, visited) {
  //   let shortedDistance = Infinity;
  //   let nodeToPick;
  //   Object.entries(shortedPath).forEach(([node, distance]) => {
  //     if (!(node in visited) && distance < shortedDistance) {
  //       nodeToPick = node;
  //       shortedDistance = distance;
  //     }
  //   });
  //   return nodeToPick;
  // }

  shortestPath(source, destination) {
    const shortestPathToOtherFromSource = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    const visited = {};

    for (let node in this.adjacencyList) {
      const distance = node === source ? 0 : Infinity;
      shortestPathToOtherFromSource[node] = distance;
      priorityQueue.enqueue(node, distance);
      previous[node] = null;
    }

    while (true) {
      const current = priorityQueue.dequeue().value;

      if (current === destination) {
        return this._generatePath(previous, destination);
      }

      const currentNeighbours = this.adjacencyList[current];

      for (let i = 0; i < currentNeighbours.length; i++) {
        const { node, weight } = currentNeighbours[i];

        if (node in visited) {
          continue;
        }

        const currentDistance = shortestPathToOtherFromSource[current];
        const newDistance = currentDistance + weight;
        if (newDistance < shortestPathToOtherFromSource[node]) {
          shortestPathToOtherFromSource[node] = newDistance;
          previous[node] = current;
          priorityQueue.enqueue(node, newDistance);
        }
      }
      visited[current] = true;
    }
  }

  _generatePath(previous, to) {
    const stack = new Stack();
    let node = to;
    stack.push(to);
    while (true) {
      if (previous[node] === null) {
        break;
      }
      stack.push(previous[node]);
      node = previous[node];
    }

    const res = [];
    while (true) {
      let node = stack.pop();
      if (node === null) break;
      res.push(node);
    }

    return res;
  }
}
