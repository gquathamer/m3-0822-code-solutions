function filter(array, predicate) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(i)) {
      filteredArray.push(i);
    }
  }
  return filteredArray;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const isEven = filter(numbers, element => element % 2 === 0);
console.log(isEven);
