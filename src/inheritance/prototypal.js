function Person(name, family) {
  this.name = name;
  this.family = family;
}

Person.prototype.sayFullName = function() {
  console.log(this.name + " " + this.family);
}

function Employee(name, family, job) {
  Person.call(this, name, family);
  this.job = job;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.sayJob = function() {
  console.log(this.job);
};

var emp = new Employee("John", "Doe", "plumber");
emp.sayFullName();
emp.sayJob();

console.log(emp instanceof Employee);
console.log(emp instanceof Person);
console.log(Employee.prototype.isPrototypeOf(emp));
console.log(Person.prototype.isPrototypeOf(emp));
console.log({}.isPrototypeOf(emp));
console.log(Object.isPrototypeOf(emp));
console.log(Object.getPrototypeOf(emp));
console.log(Object.getPrototypeOf(emp) === Employee.prototype);
console.log(Object.getPrototypeOf(emp) === Person.prototype);
console.log(emp.__proto__);
console.log(emp.__proto__.__proto__);
