let person = { name: 'Pezhman' };

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false
});

person.name = 'Sepehr';
console.log(person);
console.log(person.name);

console.log(Object.keys(person));

delete person.name;
console.log(person);
console.log(person.name);

