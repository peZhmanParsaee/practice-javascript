let x = {};
let y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
console.log(x.__proto__ === y.__proto__);
console.log(Object.prototype === x.__proto__);
