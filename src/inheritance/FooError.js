function FooError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = "FooError";
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  return instance;
}

FooError.prototype = Object.create(Error.prototype, {
  toString: {
    value: function () {
      return `${this.name} ${this.foo}`;
    },
    enumerable: false,
    configurable: false,
    writable: false
  }
});

try {
  throw new FooError("foo", "An error was happened");
} catch (err) {
  console.log(err);
  console.log(err instanceof FooError);
  console.log(err instanceof Error);
  console.log(err.toString());
}
