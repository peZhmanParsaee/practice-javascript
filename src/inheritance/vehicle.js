class Vehicle {
  constructor(engines = 1) {
    this.engines = engines;
  }

  ignition() {
    console.log("Turning on my engine");
  }

  drive() {
    this.ignition();
    console.log("Steering and moving forward");
  }
}

class Car extends Vehicle {
  constructor(wheels = 4) {
    super();
    this.wheels = wheels;
  }

  drive() {
    super.drive();
    console.log(`Rolling on all ${this.wheels} wheels`);
  }
}

class SpeedBoat extends Vehicle {
  constructor(engines = 2) {
    super(engines);
  }

  ignition() {
    console.log(`Turning on my ${this.engines} engines`);
  }

  pilot() {
    console.log("Speeding through the water with ease");
  }
}

const car = new Car(10);
car.drive();
