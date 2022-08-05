import { Queue } from "../queue";

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

  depthFirstRecursive(node) {
    const res = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfsHelper(v) {
      visited[v] = true;
      res.push(v);
      adjacencyList[v].forEach((e) => {
        if (!(e in visited)) {
          dfsHelper(e);
        }
      });
    }

    dfsHelper(node);
    return res;
  }

  depthFirstIterative(node) {
    const stack = [node];
    const res = [];
    const visited = {};
    let popped;

    visited[node] = true;
    while (stack.length) {
      popped = stack.pop();
      res.push(popped);
      this.adjacencyList[popped].forEach((neighbour) => {
        if (!(neighbour in visited)) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return res;
  }

  breadthFirst(node) {
    const res = [];
    const queue = new Queue();
    const visited = { [node]: true };
    queue.enqueue(node);
    let vertex;

    while (queue.size) {
      vertex = queue.dequeue();

      res.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!(neighbour in visited)) {
          visited[neighbour] = true;
          queue.enqueue(neighbour);
        }
      });
    }

    return res;
  }
}
