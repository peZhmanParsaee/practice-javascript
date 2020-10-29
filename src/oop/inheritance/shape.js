function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

//  method overriding
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);

  console.log("duplicate square");
};

const s = new Shape();
const c = new Circle(1, "blue");
const sq = new Square(12);

const shapes = [new Circle(10, "red"), new Square(20)];

for (let shape of shapes) shape.duplicate();
