var myObj = {
  a: 2
};

console.log(Object.getOwnPropertyDescriptor(myObj, "a"));

Object.defineProperty(myObj, "b", {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(myObj.b);

Object.defineProperty(myObj, "c", {
  value: 2,
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(myObj.c);

myObj.c = 100;

console.log(myObj.c);

(function() {
  "use strict";

  try {
    myObj.c = 150;  
  } catch (error) {
    console.error(error.message);
  }
}());

Object.defineProperty(myObj, "d", {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: false
});

try {
  Object.defineProperty(myObj, "d", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true
  });
} catch (err) {
  console.error(err.message);
}

Object.defineProperty(myObj, "e", {
  value: 8
});

console.log(myObj.e);

console.log(Object.getOwnPropertyDescriptor(myObj, "e"));

e = 18;

console.log(myObj.e);

console.log(myObj);

delete myObj.b;

console.log(myObj);
