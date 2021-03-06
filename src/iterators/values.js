var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);

console.log(it.next());
console.log(it.next());
console.log(it.next());

for (;it.hasNext();) {
  console.log(it.next());
}

function values() {
  var i = 0, n = arguments.length, a = arguments;

  return {
    hasNext: function() {
      return i < n;
    },
    next: function() {
      if (i >= n) {
        throw new Error('end of iteration');
      }

      return a[i++];
    }
  };
}
