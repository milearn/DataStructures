(function(){

    function bruteForce(inputArr) {
        const inputArrLen = inputArr.length;
        const res = [];
        for(let i=0; i< inputArrLen-1; i++) {
            let firstSmaller = -1;
            for(let j= i+1; j < inputArrLen; j++) {
                if(inputArr[j] < inputArr[i]) {
                    firstSmaller = inputArr[j];
                    break;
                }
            }
            res.push(firstSmaller)
        }
        res.push(-1);
        return res;
    }
    
    function NGLStack(arr) {
        const stack = new Stack();
        const output = [];
        const length = arr.length;
    
        for(let i=length-1; i >=0; i--) {
            while(stack.length() && stack.top() >= arr[i]){
                stack.pop();
            }
            if(stack.length()) {
                output.push(stack.top());
            } else {
                output.push(-1)
            }
            stack.push(arr[i])
        }
    
        return output.reverse();
    }
    const input = [1,3,4,2,1,4,9];
    // expect o/p=[-1,2,2,1,-1,-1,-1];
    
    const res = bruteForce(input);
    console.log('brute force', res);
    console.log('using stack', NGLStack(input))
})();
