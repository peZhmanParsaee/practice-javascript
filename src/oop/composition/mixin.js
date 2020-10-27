function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

const person1 = Object.assign({}, canEat, canWalk);
console.log(person1);

function Person() {}

mixin(Person.prototype, canWalk, canEat);
const person2 = new Person();
console.log(person2);

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
