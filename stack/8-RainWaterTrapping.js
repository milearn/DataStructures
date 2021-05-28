(function(){
    function waterTrap(arr) {
        const n = arr.length;
        const maxLeft = [];
        const maxRight = [];
        let sum = 0;
        for(let i=0; i< n; i++) {
            if(i===0) {
                maxLeft[i] = arr[i];
            } else {
                maxLeft[i] = Math.max(maxLeft[i-1], arr[i]);
            }
        }
        for(let i=n-1; i>=0; i--) {
            if(i=== n-1) {
                maxRight[i] = arr[i]
            } else {
                maxRight[i] = Math.max(maxRight[i+1], arr[i])
            }
        }
        for(let i=0; i<n; i++) {
            sum+=Math.min(maxLeft[i], maxRight[i]) - arr[i];
        }
        return sum;
    }

    const arr = [0,1,0,2,1,0,1,3,2,1,2,1];
    console.log('water trapped area', waterTrap(arr))
})()