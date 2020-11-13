function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

var it = foo();

console.log(it.next());
console.log(it.next());

for (var v of foo()) {
  console.log(v);
}
