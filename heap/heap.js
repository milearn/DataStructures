class MinHeap {
  heap = [];

  push(val) {
    if (typeof val === "undefined" || val === null) {
      return;
    }
    this.heap.push(val);
    const getParentInd = (child) => {
      return Math.floor((child - 1) / 2);
    };

    let childInd = this.heap.length - 1;
    let parentInd = getParentInd(childInd);
    // start from bottom and re-heapify till min heap condition of parent > child is satisfied
    while (parentInd >= 0 && this.heap[parentInd] > this.heap[childInd]) {
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
    let smallest = this.heap[0];
    if (this.heap.length < 2) {
      this.heap.shift();
    } else {
      // remove root element. replace top of tree with bottom element.
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      // re-heapify starting from top root element.
      // re-heapify if either of the child is less than parent.
      // choose the smallest element among the child and swap it with parent
      let current = 0;
      let leftChildIndex = 2 * current + 1;
      let rightChildIndex = leftChildIndex + 1;
      while (
        leftChildIndex < this.heap.length &&
        rightChildIndex < this.heap.length &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        const smallestChildIndex =
          this.heap[leftChildIndex] < this.heap[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;
        [this.heap[smallestChildIndex], this.heap[current]] = [
          this.heap[current],
          this.heap[smallestChildIndex],
        ];
        current = smallestChildIndex;
        leftChildIndex = 2 * current + 1;
        rightChildIndex = leftChildIndex + 1;
      }
    }
    return smallest;
  }
}

(function () {
  const minHeap = new MinHeap();
  minHeap.push(6);
  minHeap.push(5);
  minHeap.push(10);
  minHeap.push(2);
  minHeap.push(7);
  minHeap.push(8);
  minHeap.push(3);
  console.log(minHeap.heap);
  minHeap.pop();
  console.log(minHeap.heap);
})();
