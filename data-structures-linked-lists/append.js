/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let n = list;
  while (n.next) {
    n = n.next;
  }
  n.next = new LinkedList(value);
}
