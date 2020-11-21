function Foo(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Foo.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

var foo = new Foo("Pezhman", "Parsaee");
var bar = new Foo("John", "Doe");

console.log(foo.getFullName());
console.log(bar.getFullName());
console.log(Object.getPrototypeOf(foo) === Object.getPrototypeOf(bar));
