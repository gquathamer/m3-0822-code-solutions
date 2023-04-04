/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const frontValue = list.data;
    const swapValue = list.next.data;
    list.data = swapValue;
    list.next.data = frontValue;
    return list;
  }
  return list;
}
