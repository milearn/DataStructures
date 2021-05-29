(function () {
  function minimizeCost(arr) {
    const minHeap = new MinHeap();
    for (let i = 0; i < arr.length; i++) {
      minHeap.push(arr[i]);
    }
    let sum = 0;
    while (minHeap.heap.length >= 2) {
      const first = minHeap.top();
      minHeap.pop();
      const second = minHeap.top();
      minHeap.pop();
      const cost = first + second;
      sum += cost;
      minHeap.push(cost);
    }
    return sum;
  }
  function main() {
    // find 2nd most frequent element in array
    const answer1 = minimizeCost([1, 2, 3, 4, 5, 6]);
    console.log("-------minimizeCost([1, 2, 3, 4, 5, 6])--------");
    console.log(answer1);
    console.log("------minimizeCost([4,5,2,3,1])--------");
    const answer2 = minimizeCost([4, 5, 2, 3, 1]);
    console.log(answer2);
  }

  main();
})();
