// Q-17
class Stack {
    items = [];
    // Add an item to the top of the stack
    push(item) {
        this.items.push(item);
    }
    // Remove and return the item from the top of the stack
    pop() {
        return this.items.pop();
    }
    // Return the item at the top of the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }
    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}
// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
// Q-18
class Queue {
    items = [];
    // Add an item to the end of the queue
    enQueue(item) {
        this.items.push(item);
    }
    // Remove and return the item from the front of the queue
    deQueue() {
        return this.items.shift();
    }
    // Return the item at the front of the queue without removing it
    peek() {
        return this.items[0];
    }
    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}
// Example usage
const queue = new Queue();
queue.enQueue("a");
queue.enQueue("b");
console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue.isEmpty());
export {};
