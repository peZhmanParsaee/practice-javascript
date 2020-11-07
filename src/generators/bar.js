function *foo() {
  var arr = [yield 1, yield 2, yield 3];

  console.log(arr);
}

var itt = foo();
console.log(itt.next(33000));
console.log(itt.next(1002));
console.log(itt.next(333));
console.log(itt.next(21));
console.log(itt.next());
console.log(itt.next());
console.log(itt.next());

function *bar() {
  while(true) {
    yield Math.random();
  }
}

var it = bar();
console.log(it.next());
console.log(it.next());
console.log(it.next());

function *baz() {
  var x = yield 200;
  console.log(x);
}

var it2 = baz();
console.log(it2.next());
console.log(it2.next(111));
