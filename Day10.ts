// Q-19

class Counter {
    private value: number;

    constructor(initialValue: number = 0) {
        this.value = initialValue;
    }

    increment(): void {
        this.value += 1;
    }

    decrement(): void {
        this.value -= 1;
    }

    getValue(): number {
        return this.value
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
    Name: string;
    Grade: number;

    constructor(Name: string, Grade: number) {
        this.Name = Name;
        this.Grade = Grade;
    }

    setName(name: string): void {
        this.Name = name;
    }

    setGrade(grade: number): void {
        this.Grade = grade;
    }

    getRecord(): {Name: string, Grade: number} {
        return {
            Name: this.Name,
            Grade: this.Grade
        }
    }
}

const student = new Student('Alice', 90);
console.log(student.getRecord());


student.setName('Taha');
student.setGrade(99);
console.log(student.getRecord());


