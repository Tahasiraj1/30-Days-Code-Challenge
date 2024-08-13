// Q-16

import { Shape } from "./Day8-Q2.1st.js";

export class Circle implements Shape {
    name: string;
    area: number;
    private radius: number;

    constructor(name: string, radius: number) {
        this.name = name;
        this.radius = radius;
        this.area = this.calculateArea();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}