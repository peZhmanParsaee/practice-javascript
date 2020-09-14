class Vehicle {
  engines = 1

  ignition() {
    console.log('Turning on my engine');
  }

  drive() {
    this.ignition();
    console.log('Steering and moving forward');
  }
}

class Card extends Vehicle {
  wheels = 4

  drive() {
    super.drive();
    console.log(`Rolling on all ${this.wheels} wheels`);
  }
}

class SpeedBoat extends Vehicle {
  engines = 2

  ignition() {
    console.log(`Turning on my ${this.engines} engines`)
  }

  pilot() {
    console.log('Speeding through the water with ease')
  }
}
