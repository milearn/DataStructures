(function(){
    function StockSpan(arr){
        const stack = new Stack();
        const output = [];
        const len = arr.length;
        for(let i=0; i< len; i++) {
            while(stack.length() && stack.top().val <= arr[i]) {
                stack.pop()
            }
            if(stack.length()) {
                output.push(stack.top().index);
            } else {
                output.push(-1);
            }
            stack.push({val: arr[i], index: i})
        }
        return output.map((val,index) => index-val);
    }
    

    const arr = [100,80,60,70,60,75,85];
    const res= StockSpan(arr);
    console.log(res);
})()