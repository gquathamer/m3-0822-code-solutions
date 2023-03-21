/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const postponedValue = queue.dequeue();
  queue.enqueue(postponedValue);
}
