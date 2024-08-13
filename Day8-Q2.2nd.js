// Q-16
export class Circle {
    name;
    area;
    radius;
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
        this.area = this.calculateArea();
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
