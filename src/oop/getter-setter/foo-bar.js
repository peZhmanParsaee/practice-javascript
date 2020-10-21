// read only property
var foo = {
  get a() {
    return 2;
  }
};

foo.a = 10;
console.log(foo.a);

// setter with private property
var bar = function () {
  var _a;

  return {
    get a() {
      return _a;
    },
    set a(val) {
      _a = val * 2;
    }
  }
}();

bar.a = 2;

console.log(bar.a);
console.log(bar._a_);

Object.defineProperty(bar, 'b', {
  get: function() {
    return this.a * 2
  },
  enumerable: true
});

console.log(bar.a);
console.log(bar.b);
