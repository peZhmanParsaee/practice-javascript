var obj = {
  name: 'pezhman'
};

console.log('name' in obj);
console.log('avg' in obj);

console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('avg'));

console.log('\n');
console.log(1 in [1,2,3]);
console.log(1 in [10,20,30]);
console.log(20 in [1,2,3]);


var cars = ["BMW", "Benz", "Lamborghini"];

console.log("0 in cars", 0 in cars);
console.log("1 in cars", 1 in cars);
console.log("4 in cars", 4 in cars);
console.log("\"length\" in  cars", "length" in cars);
