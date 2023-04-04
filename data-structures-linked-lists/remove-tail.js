/* exported removeTail */

function removeTail(list) {
  let n = list;
  if (n.next === null) {
    return;
  }
  while (n.next.next) {
    n = n.next;
  }
  n.next = null;
}
