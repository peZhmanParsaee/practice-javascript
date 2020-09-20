var proto = {
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

var foo = Object.create(proto, {
  firstName: {
    value: "Pezhman",
    writable: true,
    configurable: true,
    enumerable: true
  },
  lastName: {
    value: "Parsaee",
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(foo.getFullName());
