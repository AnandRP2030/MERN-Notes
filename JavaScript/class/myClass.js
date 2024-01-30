class Student {
    constructor(rollNo, name, age) {
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log("name", this.name);
    }
}

let student1 = new Student(1, "Anand", 23);
console.log("student1", student1);