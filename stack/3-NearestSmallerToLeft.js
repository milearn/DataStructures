(function(){

    function bruteForce(inputArr) {
        const inputArrLen = inputArr.length;
        const res = [-1];
        for(let i=1; i< inputArrLen; i++) {
            let firstSmaller = -1;
            for(let j= i-1; j >= 0; j--) {
                if(inputArr[j] < inputArr[i]) {
                    firstSmaller = inputArr[j];
                    break;
                }
            }
            res.push(firstSmaller)
        }
        return res;
    }
    
    function NGLStack(arr) {
        const stack = new Stack();
        const output = [];
        const length = arr.length;
    
        for(let i=0; i < length; i++) {
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
    
        return output;
    }
    const input = [1,3,4,2,1,4,9];
    // expect o/p=[-1,1,3,1,-1,1,4]

    const res = bruteForce(input);
    console.log('brute force', res);
    const resNGL = NGLStack(input);

    console.log('using stack', resNGL)
})();
