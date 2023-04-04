/* exported getLength */

function getLength(list) {
  let count = 1;
  let refList = list;
  while (refList.next) {
    count++;
    refList = refList.next;
  }
  return count;
}
