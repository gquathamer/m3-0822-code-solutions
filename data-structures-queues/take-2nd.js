/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const postponedValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return postponedValue;
  }
  queue.enqueue(postponedValue);
  return queue.dequeue();
}
