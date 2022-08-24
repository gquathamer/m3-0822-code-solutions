function reduce(array, reducer, initialValue) {
  let reducedValue;
  if (initialValue !== undefined) {
    reducedValue = reducer(initialValue, array[0]);
  }
  if (initialValue === undefined) {
    reducedValue = array[0];
  }
  for (let i = 1; i < array.length; i++) {
    reducedValue = reducer(reducedValue, array[i]);
  }
  return reducedValue;
}

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumAll = reduce(traits, (previousValue, currentValue) => {
  return Object.assign(previousValue, currentValue);
}, {});
console.log(sumAll);
