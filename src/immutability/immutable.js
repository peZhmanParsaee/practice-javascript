var myObj = {};

Object.defineProperty(myObj, "FAVORITE_NUMBER", {
  value: 99,
  writable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(myObj, "FAVORITE_NUMBER"));

myObj.value = 50;

console.log(myObj.FAVORITE_NUMBER);




var obj = {
  a: 10
};

Object.preventExtensions(obj);
obj.b = 3;
console.log(obj.b);

(function() {
  "use strict";

  try {
    obj.c = 10;  
  } catch (err) {
    console.error(err.message);
  }

}());

delete obj.a;
console.log('obj after deleting obj.a', obj);




var obj2 = {
  a: 1,
  b: 2
};

Object.seal(obj2);
obj2.a = 10;

console.log(obj2);

obj2.d = 5;
console.log(obj2);

delete obj2.a;
console.log(obj2);

try {
  Object.defineProperty(obj2, "a", {
    configurable: true
  });
} catch (err) {
  console.error(err.message);
}



var obj3 = {
  a: 1,
  b: 2
};

Object.freeze(obj3);

obj3.a = 10;

console.log(obj3);

