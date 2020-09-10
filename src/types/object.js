var myObj = {};

myObj.a = 2;
myObj['name'] = 'pezhman';
myObj['A$#@~`0;>'] = 'hi!';
myObj[true] = 'foo';
myObj[3] = "bar";
myObj[myObj] = "baz";

var str='بسی رنج کشیدم در این سال سی';
myObj['سلام دنیا'] = str;

console.log(myObj['a']);
console.log(myObj['name']);
console.log(myObj['A$#@~`0;>']);
console.log(myObj['true']);
console.log(myObj['3']);
console.log(myObj['[object Object]']);
console.log(myObj['سلام دنیا']);

console.log(Object.keys(myObj));
