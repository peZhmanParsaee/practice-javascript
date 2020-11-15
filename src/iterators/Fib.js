var Fib = {
  [Symbol.iterator]: () => {
    var n1 = 1, n2 = 1;

    return {
      next: function() {
        var current = n2;
        n2 = n1;
        n1 = n1 + current;
        return {
          value: current,
          done: false
        };
      }
    };
  }
};


for(var v of Fib) {
  console.log(v);

  if (v > 55) break;
}
