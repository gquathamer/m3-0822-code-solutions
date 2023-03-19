/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }
  let firstSmaller;
  const arr = [];
  while (queue.peek() !== undefined) {
    const frontOfQueue = queue.dequeue();
    if (frontOfQueue <= queue.peek() && firstSmaller === undefined) {
      firstSmaller = frontOfQueue;
    }
    if (frontOfQueue > queue.peek()) {
      arr.push(frontOfQueue);
    }
  }
  for (const elem in arr) {
    queue.enqueue(elem);
  }
  return firstSmaller;
}
