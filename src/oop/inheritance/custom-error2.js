function CustomError2(foo, message, fileName, lineNumber) {
  Error.call(this, message, fileName, lineNumber);
  
  this.name = "CustomError2";
  this.foo = foo;
}

CustomError2.prototype = Object.create(Error.prototype, {
  toString: {
    value: function () {
      return `${this.name} ${this.foo}`;
    },
    enumerable: false,
    configurable: false,
    writable: false
  }
});
CustomError2.prototype.constructor = CustomError2;

try {
  throw new CustomError2("foo", "An error was happened");
} catch (err) {
  console.log(err);
  console.log(err instanceof CustomError2);
  console.log(err instanceof Error);
  console.log(err.toString());
}
