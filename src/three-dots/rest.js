function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));


function xyz(x, y, ...z) {
  console.log(x, ' ', y);

  console.log(z);
  console.log(z[0]);
  console.log(z.length);
}

xyz('hey', 'hello', 'howdy', 'wassup', 'goodmorning');
