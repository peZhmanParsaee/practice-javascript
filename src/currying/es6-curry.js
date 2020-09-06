function curry(fn) {
  return function(...args) {
    return fn.bind(null, ...args);
  }
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
