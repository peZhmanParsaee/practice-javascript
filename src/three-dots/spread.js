const arr = ['hey', 'hi', 'hello'];
const newArr = [...arr, 'howdy', 'wassup'];
const copy = [...arr];

console.log('arr: ', arr);
console.log('newArr: ', newArr);
console.log('copied array: ', copy);

function add(a, b, c) {
  const summation = a + b + c;
  return summation;
}

const args = [1, 2, 3];
console.log(add(...args));

