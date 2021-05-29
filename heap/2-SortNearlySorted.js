(function () {
  function sortNearlySorted(arr, k) {
    const minHeap = new MinHeap();
    const outputArr = [];
    for (let i = 0; i < arr.length; i++) {
      minHeap.push(arr[i]);
      if (minHeap.heap.length > k) {
        outputArr.push(minHeap.top());
        minHeap.pop();
      }
    }
    while (minHeap.heap.length > 0) {
      outputArr.push(minHeap.top());
      minHeap.pop();
    }
    return outputArr;
  }
  function main() {
    const answer1 = sortNearlySorted([6, 5, 3, 2, 8, 10, 9], 3);
    console.log("-------sortNearlySorted([6,5,3,2,8,10,9], 3)--------");
    console.log(answer1);
    console.log("-------sortNearlySorted([10, 4, 3, 7, 20, 15], 2)--------");
    const answer2 = sortNearlySorted([10, 4, 3, 7, 20, 15], 2);
    console.log(answer2);
  }

  main();
})();
