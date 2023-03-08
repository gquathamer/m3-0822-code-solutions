/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const topValue = stack.pop();
  const secondValue = stack.peek();
  stack.push(topValue);
  return secondValue;
}
