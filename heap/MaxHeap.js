class MaxHeap {
  heap = [];
  // comparator function is allowed in case elements in heap are objects.
  // comparator function returns a number which helps in sorting(re-heapify) the array.
  constructor(comparator) {
    this.comparator =
      typeof comparator === "function"
        ? comparator
        : function (val) {
            return val;
          };
  }
  push(val) {
    if (typeof val === "undefined" || val === null) {
      return undefined;
    }
    this.heap.push(val);
    if (this.heap.length === 1) {
      return;
    }
    const getParentInd = (child) => {
      return Math.floor((child - 1) / 2);
    };

    let childInd = this.heap.length - 1;
    let parentInd = getParentInd(childInd);
    // start from bottom and re-heapify till min heap condition of parent < child is satisfied
    while (
      parentInd >= 0 &&
      this.comparator(this.heap[parentInd]) <
        this.comparator(this.heap[childInd])
    ) {
      [this.heap[parentInd], this.heap[childInd]] = [
        this.heap[childInd],
        this.heap[parentInd],
      ];
      childInd = parentInd;
      parentInd = getParentInd(childInd);
    }
  }
  top() {
    return this.heap[0];
  }
  pop() {
    if (!this.heap.length) {
      return null;
    }
    let largest = this.heap[0];
    if (this.heap.length <= 2) {
      this.heap.shift();
    } else {
      // remove root element. replace top of tree with bottom element.
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      // re-heapify starting from top root element.
      // re-heapify if either of the child is less than parent.
      // choose the largest element among the child and swap it with parent
      let current = 0;
      let leftChildIndex = 2 * current + 1;
      let rightChildIndex = leftChildIndex + 1;
      while (
        (leftChildIndex < this.heap.length &&
          this.comparator(this.heap[current]) <
            this.comparator(this.heap[leftChildIndex])) ||
        (rightChildIndex < this.heap.length &&
          this.comparator(this.heap[current]) <
            this.comparator(this.heap[rightChildIndex]))
      ) {
        // condition to check if rightChildIndex is a valid index or not.
        const largestChildIndex =
          rightChildIndex >= this.heap.length ||
          this.comparator(this.heap[leftChildIndex]) >
            this.comparator(this.heap[rightChildIndex])
            ? leftChildIndex
            : rightChildIndex;
        [this.heap[largestChildIndex], this.heap[current]] = [
          this.heap[current],
          this.heap[largestChildIndex],
        ];
        current = largestChildIndex;
        leftChildIndex = 2 * current + 1;
        rightChildIndex = leftChildIndex + 1;
      }
    }
    return largest;
  }
}

(function () {
  console.log("---------MAX HEAP---------");
  const maxHeap = new MaxHeap();
  maxHeap.push(6);
  maxHeap.push(5);
  maxHeap.push(10);
  maxHeap.push(2);
  maxHeap.push(7);
  maxHeap.push(8);
  maxHeap.push(3);
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
  maxHeap.pop();
  console.log(maxHeap.heap);
})();
