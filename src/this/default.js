function foo() {
  console.log(this.a);
}

var a = 2; // just works in browser
global.a = 3; // this works in node

foo();
