(function () {
  function kClosestElement(arr, k, num) {
    const maxHeap = new MaxHeap(function (item) {
      return item[0];
    });
    const diffArr = arr.map((item) => [Math.abs(item - num), item]);

    const outputArr = [];
    for (let i = 0; i < diffArr.length; i++) {
      maxHeap.push(diffArr[i]);
      if (maxHeap.heap.length > k) {
        maxHeap.pop();
      }
    }
    while (maxHeap.heap.length > 0) {
      outputArr.push(maxHeap.top()[1]);
      maxHeap.pop();
    }
    return outputArr;
  }
  function main() {
    const answer1 = kClosestElement([6, 5, 3, 2, 8, 10, 9], 3, 5);
    console.log("-------kClosestElement([6,5,3,2,8,10,9], 3, 5)--------");
    console.log(answer1);
    console.log("-------kClosestElement([10, 4, 3, 7, 20, 15], 2, 9)--------");
    const answer2 = kClosestElement([10, 4, 3, 7, 20, 15], 2, 9);
    console.log(answer2);
  }

  main();
})();
