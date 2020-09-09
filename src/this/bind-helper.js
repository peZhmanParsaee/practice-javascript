function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

// simple bind helper
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}

var obj = {
  a: 2,
};

// var bar = foo.bind(obj);
var bar = bind(foo, obj);

var b = bar(3);
console.log(b);
