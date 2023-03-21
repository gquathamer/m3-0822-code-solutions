/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  if (firstValue < queue.peek()) {
    queue.enqueue(queue.dequeue());
    return firstValue;
  } else if (firstValue === queue.peek()) {
    queue.enqueue(firstValue);
  } else if (firstValue > queue.peek()) {
    const value = queue.peek();
    queue.enqueue(firstValue);
    queue.dequeue();
    return value;
  }
  return queue.dequeue();
}
