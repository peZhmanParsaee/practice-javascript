var myObj = {
  foo: function () {
    console.log('-----------');
    console.log('foo', this);
    console.log('-----------');
  }
};

var myFoo = myObj.foo;

myFoo();

myObj.foo();
