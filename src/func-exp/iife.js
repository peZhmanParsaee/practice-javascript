var a = 2;

(function foo() {
  var a = 3;
  console.log(a);
})();

(function () {
  var a = 4;
  console.log(a);
})();

(function () {
  var a = 5;
  console.log(a);
}());

(function IIFE(g) {
  console.log('global a is ', g.a);
})(global);

console.log(a);

(function IIFE(g) {
  console.log('i');
}(a));
