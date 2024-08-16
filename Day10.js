// Q-19
class Counter {
    value;
    constructor(initialValue = 0) {
        this.value = initialValue;
    }
    increment() {
        this.value += 1;
    }
    decrement() {
        this.value -= 1;
    }
    getValue() {
        return this.value;
    }
}
// Example usage
const counter = new Counter();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
// Q-20
class Student {
    Name;
    Grade;
    constructor(Name, Grade) {
        this.Name = Name;
        this.Grade = Grade;
    }
    setName(name) {
        this.Name = name;
    }
    setGrade(grade) {
        this.Grade = grade;
    }
    getRecord() {
        return {
            Name: this.Name,
            Grade: this.Grade
        };
    }
}
const student = new Student('Alice', 90);
console.log(student.getRecord());
student.setName('Taha');
student.setGrade(80);
console.log(student.getRecord());
export {};
