var anotherObject = {
  a: 2
};

console.log("a" in anotherObject);

var myObject = Object.create(anotherObject);

for (var k in myObject) {
  console.log('found prop: ' + k);
}

console.log("a" in myObject);
