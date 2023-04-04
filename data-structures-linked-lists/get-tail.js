/* exported getTail */

function getTail(list) {
  // should return the data value of the last node in the list
  // should not modify the list
  // cannot create a new list

  // iterate through the list while list.next is not null
  // when you find the case that list.next is null, return list.value
  /* if (list.next === null) {
    console.log(list.data);
    return list.data;
  }
  getTail(list.next);
 */
  let n = list;
  while (n.next) {
    n = n.next;
  }
  return n.data;
}
