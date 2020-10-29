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
Employee.prototype.constructor = Employee;

Employee.prototype.sayJob = function() {
  console.log(this.job);
};

var emp = new Employee("John", "Doe", "plumber");
emp.sayFullName();
emp.sayJob();

console.log('emp instanceof Employee: ', emp instanceof Employee);
console.log('emp instanceof Person: ', emp instanceof Person);
console.log('emp instanceof Object: ', emp instanceof Object);
console.log('Employee.prototype.isPrototypeOf(emp): ', Employee.prototype.isPrototypeOf(emp));
console.log('Person.prototype.isPrototypeOf(emp): ', Person.prototype.isPrototypeOf(emp));
console.log('Object.prototype.isPrototypeOf(emp): ', Object.prototype.isPrototypeOf(emp));
console.log('{}.isPrototypeOf(emp): ', {}.isPrototypeOf(emp));
console.log('Object.isPrototypeOf(emp): ', Object.isPrototypeOf(emp));
console.log('Object.getPrototypeOf(emp): ', Object.getPrototypeOf(emp));
console.log('Object.getPrototypeOf(emp) === Employee.prototype: ', Object.getPrototypeOf(emp) === Employee.prototype);
console.log('Object.getPrototypeOf(emp) === Person.prototype', Object.getPrototypeOf(emp) === Person.prototype);
console.log('emp.__proto__', emp.__proto__);
console.log('emp.__proto__.__proto__', emp.__proto__.__proto__);
