import { Queue } from "../queue";

export function breadthFirst(tree) {
  const nodes = [];
  const queue = new Queue();
  if (tree.root === null) return nodes;

  queue.enqueue(tree.root);
  while (queue.size) {
    const first = queue.dequeue();
    nodes.push(first.value);

    const restProps = Object.keys(first).filter((value) => value !== "value");

    restProps.forEach(
      (childrenOfFirst) =>
        first[childrenOfFirst] && queue.enqueue(first[childrenOfFirst])
    );
  }

  return nodes;
}
