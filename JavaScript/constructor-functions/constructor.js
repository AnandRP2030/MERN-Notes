function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
    this.incentive = 5000;

    // instance method 
    this.printName = function () {
        console.log("name =>", this.name);
    }
}

// prototype method
Employee.prototype.fullSalary = function () {
    console.log("full salary", this.salary + this.incentive);
}




let emp1 = new Employee ("Anand", 50000);
console.log("emp1", emp1)
console.log("emp1 name", emp1.name)
console.log("emp1 incentive", emp1.incentive)
emp1.printName();
emp1.fullSalary();
