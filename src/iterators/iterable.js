var obj = {
  a: 2,
  b: 3
};

Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,

  value: function() {
    
    var o = this;
    var idx = 0;
    var ks = Object.keys(o);

    return {      
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length
        }
      }
    };
  },
});

var it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (var v of obj) {
  console.log('v: ', v);
}

var obj2 = {
  name: 'pzh',
  avg: 17,
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {
          value: Math.random()
        }
      }
    };
  }
};

console.log(obj2);

const it2 = obj2[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());



const randoms = {
  [Symbol.iterator]: function () {
    return {
      next: function() {
        return {
          value: Math.random()
        }
      }
    };
  }
};

const randomPool = [];
for (let n of randoms) {
  randomPool.push(n);

  if (randomPool.length === 100) break;
}

console.log(randomPool);
