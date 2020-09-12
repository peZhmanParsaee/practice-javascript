function deepFreeze(obj) {

  const props = Object.getOwnPropertyNames(obj);

  for (let i =0; i < props.length; i++) {
    
    const prop = obj[props[i]];

    const propType = Object.prototype.toString.call(prop).slice(8, -1);
    
    if (propType === 'Object') {
      console.log(prop, propType, 'deep freeze');

      deepFreeze(obj[Object.keys(obj)[i]]);

    } else if (propType === 'Array' || propType === 'Function') {
      console.log(prop, propType, 'freeze');

      Object.freeze(prop);

    } else {
      console.log(prop, propType, 'no freeze');
    }
  }

  return Object.freeze(obj);
}

var complexObject = {
  a: 1,
  b: 'b',
  c: false,
  inner: {
    d: 2,
    e: 10,
    f: false,
    obj: {
      name: 'pzh',
      address: {
        street: 1,
        plaque: 10
      }
    }
  },
  arr: [1, 2, 3, 4, 5],
  foo: new Foo(10),
  bar: function () {
    return 'bar';
  },
  dt: new Date()
};

deepFreeze(complexObject);

complexObject.a = 10;
complexObject.inner.d = 20;
delete complexObject.bar;

complexObject.bar = null;
complexObject.dt = new Date('2019-10-15');

console.log(complexObject);


function Foo(a) {
  this.a = a;
}
