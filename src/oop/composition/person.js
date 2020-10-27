let mixin = {
  sayHi: function() {
    console.log(`Hello ${this.name}`);
  },
  sayBy: function() {
    console.log(`Bye ${this.name}`);
  }
};

class Person {
  constructor() {
    this.id = new Date().valueOf();
  }
}

class User extends Person {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(User.prototype, mixin);

const user = new User('Dude');
user.sayHi();
console.log(`user id is: ${user.id}`);
