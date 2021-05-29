(function () {
  function kthFrequentElement(arr, k) {
    const minHeap = new MinHeap(function (item) {
      return item[1];
    });
    const freqObj = arr.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc;
    }, {});

    const freqArr = Object.keys(freqObj).map((key) => [
      Number(key),
      freqObj[key],
    ]);
    for (let i = 0; i < freqArr.length; i++) {
      minHeap.push(freqArr[i]);
      if (minHeap.heap.length > k) {
        minHeap.pop();
      }
    }
    return minHeap.top()[0];
  }
  function main() {
    // find 2nd most frequent element in array
    const answer1 = kthFrequentElement([1, 2, 2, 3, 1, 1, 3, 3, 3, 4], 2);
    console.log(
      "-------kthFrequentElement([1,2,2, 3, 1, 1, 3,3,3,4], 2)--------"
    );
    console.log(answer1);
    //   console.log("-------kthFrequentElement([10, 4, 3, 7, 20, 15], 2, 9)--------");
    //   const answer2 = kthFrequentElement([10, 4, 3, 7, 20, 15], 2, 9);
    // console.log(answer2);
  }

  main();
})();
