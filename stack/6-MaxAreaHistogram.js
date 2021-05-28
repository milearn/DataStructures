(function(){
    function maxAreaHist(arr) {
        const NSLArr = NSLIndex(arr);
        const NSRArr = NSRIndex(arr);
        const areaArr = [];
        // can also find max in this loop itself;
        for(let i=0; i< arr.length; i++) {
            areaArr.push((NSRArr[i] - NSLArr[i] - 1) * arr[i]);
        }
        return Math.max(...areaArr);
    }
    function NSLIndex(arr) {
        const stack = new Stack();
        const output = [];
        for(let i=0; i< arr.length; i++) {
            while(stack.length() && stack.top().val >= arr[i]) {
                stack.pop();
            }
            if(stack.length()) {
                output.push(stack.top().index);
            } else {
                output.push(-1);
            }
            stack.push({val: arr[i], index: i})
        }
        return output;
    }
    function NSRIndex(arr) {
        const stack = new Stack();
        const output = [];
        const n = arr.length;
        for(let i=n-1; i>=0; i--) {
            while(stack.length() && stack.top().val >= arr[i]) {
                stack.pop()
            }
            if(stack.length()) {
                output.push(stack.top().index);
            } else {
                output.push(n);
            }
            stack.push({val: arr[i], index: i});

        }
        return output.reverse();
    }
    const input = [6,2,5,4,5,1,6]
    console.log('max Area Histogram', maxAreaHist(input));

})()