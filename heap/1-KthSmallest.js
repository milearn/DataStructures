(function () {
  function KthSmallestNumber(arr, k) {
    const maxHeap = new MaxHeap();
    for (let i = 0; i < arr.length; i++) {
      maxHeap.push(arr[i]);
      if (maxHeap.heap.length > k) {
        maxHeap.pop();
      }
    }
    return maxHeap.top();
  }
  function main() {
    const answer1 = KthSmallestNumber([10, 4, 3, 7, 20, 15], 3);
    console.log("-------KthSmallestNumber([10, 4, 3, 7, 20, 15], 3)--------");
    console.log(answer1);
    console.log("-------KthSmallestNumber([10, 4, 3, 7, 20, 15], 5)--------");
    const answer2 = KthSmallestNumber([10, 4, 3, 7, 20, 15], 5);
    console.log(answer2);
  }

  main();
})();
