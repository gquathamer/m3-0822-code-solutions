function map(array, transform) {
  const transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    transformedArray.push(transform(array[i]));
  }
  return transformedArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const squared = map(numbers, element => element * element);
console.log(squared);
