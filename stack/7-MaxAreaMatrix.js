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


(function(){
    function maxAreaMatrix(matrix) {
        const row = matrix.length;
        const col = matrix[0].length;
        let summationArr = [];
        let maxArea = 0;
        for(let i=0; i< row; i++) {
            for(let j=0; j<col; j++) {
                if(matrix[i][j] === 0) {
                    summationArr[j] = 0
                } else {
                    summationArr[j]= (summationArr[j] || 0) + matrix[i][j];
                }
            }
            maxArea  = Math.max(maxAreaHist(summationArr), maxArea);
        }
        return maxArea;
    } 
    const matrix1 = [[0,1,1,0],
                    [1,1,1,1],
                    [1,1,1,1],
                    [1,1,0,0]]


    console.log('Max Area Matrix', maxAreaMatrix(matrix1));
})()