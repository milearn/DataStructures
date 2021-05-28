
function bruteForce(inputArr) {
    const inputArrLen = inputArr.length;
    const res = [-1];
    for(let i=1; i< inputArrLen; i++) {
        let firstGreater = -1;
        for(let j= i-1; j >= 0; j--) {
            if(inputArr[j] > inputArr[i]) {
                firstGreater = inputArr[j];
                break;
            }
        }
        res.push(firstGreater)
    }
    return res;
}

function NGLStack(arr) {
    const stack = new Stack();
    const output = [];
    const length = arr.length;

    for(let i=0; i < length; i++) {
        while(stack.length() && stack.top() <= arr[i]){
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
const input = [5,3,4,2,1,4,9];

const res = bruteForce(input);
console.log('brute force', res);
console.log('using stack', NGLStack(input))