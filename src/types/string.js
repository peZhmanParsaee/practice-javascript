var strPrimitive = "I am a string";
console.log(typeof strPrimitive);
console.log(strPrimitive instanceof String);

var strObject = new String('I am a string');
console.log(typeof strObject);
console.log(strObject instanceof String);

console.log(Object.prototype.toString.call(strObject));
console.log(strObject.toString());
console.log(Object.prototype.toString.call(strPrimitive));
console.log(Object.prototype.toString.call('strPrimitive'));
console.log(Object.prototype.toString.call(2));

console.log(strPrimitive.length);
console.log(strPrimitive.charAt(3));
