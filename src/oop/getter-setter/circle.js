function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location");
      }

      defaultLocation = value;
    },
  });
}

const circle = new Circle(2);

circle.draw();

console.log(circle.defaultLocation);
circle.defaultLocation = 1; // Error
