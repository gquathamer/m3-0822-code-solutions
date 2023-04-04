/* exported includes */

function includes(list, value) {
  let n = list;
  if (n.next === null) {
    if (n.data === value) {
      return true;
    }
  }
  while (n.next) {
    if (n.data === value || n.next.data === value) {
      return true;
    }
    n = n.next;
  }

  return false;
}
