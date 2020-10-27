function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = "CustomError";
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  toString: {
    value: function () {
      return `${this.name} ${this.foo}`;
    },
    enumerable: false,
    configurable: false,
    writable: false
  }
});
CustomError.prototype.constructor = CustomError;

try {
  throw new CustomError("foo", "An error was happened");
} catch (err) {
  console.log(err);
  console.log(err instanceof CustomError);
  console.log(err instanceof Error);
  console.log(err.toString());
}
