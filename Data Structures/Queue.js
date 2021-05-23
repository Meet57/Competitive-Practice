module.exports = class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        return this.items.push(element);
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
