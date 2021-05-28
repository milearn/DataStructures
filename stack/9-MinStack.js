// Using supporting stack O(n) space
(function(){
    class MinStack extends Stack {
        supportStack = new Stack();
        constructor() {
            super()
        }
        push(val) {
            super.push(val);
            if(!this.supportStack.length() || val <= this.supportStack.top()) {
                this.supportStack.push(val);
            }
        }
        pop() {
            if(this.length() && this.top() === this.supportStack.top()) {
                this.supportStack.pop()
            }
            super.pop();
        }
        minElement() {
            return this.supportStack.length() ? this.supportStack.top(): -1;
        }
    }

    function main(){
        const stack = new MinStack();
        console.log(stack.minElement());

        stack.push(5);
        console.log(stack.minElement());

        stack.push(7);
        console.log(stack.minElement());

        stack.push(1);
        console.log(stack.minElement());
        
        stack.pop();
        console.log(stack.minElement());
        stack.push(3);
        console.log(stack.minElement());
        stack.pop();
        console.log(stack.minElement());


    }
    main();
})();

// Using O(1) space
(function(){
    class MinStack extends Stack {
        minimum = -1;

        push(val) {
            if(typeof val === "undefined") {
                return;
            }
            if(!this.length()) {
               this.stack.push(val);
               this.minimum = val;
            }
           if(val >= this.minimum) {
               this.stack.push(val);
           } else {
               const flag = 2*val - this.minimum;
               this.stack.push(flag);
               this.minimum = val;
           }
        }
        pop() {
            if(!this.length()) {
                return -1;
            }
            const top = this.stack[this.length() - 1];
            if(top < this.minimum) {
                this.minimum = 2* this.minimum - top;
            }
            this.stack.pop();
        }
        top() {
            if(!this.length()) {
                return -1;
            }
            let top = this.stack[this.length() - 1];
            if(top < this.minimum) {
                top = 2* this.minimum - top;
            }
            return top;
        }
        minElement() {
            return this.minimum;
        }
    }

    function main(){
        const stack = new MinStack();
        console.log('-----------using O(1)----------')
        console.log(stack.minElement());

        stack.push(5);
        console.log(stack.minElement());

        stack.push(7);
        console.log(stack.minElement());

        stack.push(1);
        console.log(stack.minElement());
        
        stack.pop();
        console.log(stack.minElement());
        stack.push(3);
        console.log(stack.minElement());
        stack.pop();
        console.log(stack.minElement());

    }
    main();
})()