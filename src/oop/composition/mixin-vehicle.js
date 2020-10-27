function mixin(sourceObject, targetObject) {
  for (var key in sourceObject) {
    if (!(key in targetObject)) {
      targetObject[key] = sourceObject[key];
    }
  }

  return targetObject;
}

var Vehicle = {
  engines: 1,

  ignition: function() {
    console.log('ingition');
  },

  drive: function() {
    this.ignition();
    console.log('drive');
  }
};

var Car = mixin(Vehicle, {
  wheels: 4,

  drive: function() {
    // explicit polymorphism
    Vehicle.drive.call(this);
    console.log(`Rolling on all ${wheels} wheels`)
  }
});
