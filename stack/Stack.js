class Stack {
    stack = [];
    constructor(arr) {
        this.stack = arr || [];
    }
    getStack() {
        return this.stack;
    }
    length() {
        return this.stack.length;
    }
    push(value) {
        if(typeof value !== "undefined" || value !== null) {
            this.stack.push(value);
        }
    }
    pop() {
        const length = this.stack.length;
        return length?this.stack.pop(): undefined;
    }
    top() {
        const length = this.stack.length;
        return length? this.stack[length-1]: undefined;
    }
}