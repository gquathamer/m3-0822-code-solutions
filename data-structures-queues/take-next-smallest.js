/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }
  let frontOfQueue = queue.dequeue();
  if (queue.peek() === undefined) {
    return frontOfQueue;
  }
  while (frontOfQueue > queue.peek()) {
    queue.enqueue(frontOfQueue);
    frontOfQueue = queue.dequeue();
  }
  return frontOfQueue;
}
