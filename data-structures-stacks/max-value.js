/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = -Infinity;
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    maxValue = Math.max(currentValue, maxValue);
  }
  return maxValue;
}
