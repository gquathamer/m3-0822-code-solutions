const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(element => element * 2);
console.log(doubled);

const prices = numbers.map(element => `$${element.toFixed(2)}`);
console.log(prices);

const upperCased = languages.map(element => element.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(element => element[0]);
console.log(firstLetters);
