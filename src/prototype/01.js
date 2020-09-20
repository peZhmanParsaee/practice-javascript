function Foo(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Foo.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

var foo = new Foo("Pezhman", "Parsaee");

console.log(foo.getFullName());
