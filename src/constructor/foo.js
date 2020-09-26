function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);

function func2(a) {
  this.a = a;
  return {val: 'hi'};
}

var baz = new func2(3);
console.log(baz);

