class MinHeap {
  heap = [];

  insert(val) {
    if (typeof val === "undefined" || val === null) {
      return;
    }
    this.heap.push(val);
    const getParentInd = (child) => {
      return Math.floor((child - 1) / 2);
    };
    if (this.heap.length > 1) {
      let childInd = this.heap.length - 1;
      let parentInd = getParentInd(childInd);
      while (parentInd >= 0 && this.heap[parentInd] > this.heap[childInd]) {
        [this.heap[parentInd], this.heap[childInd]] = [
          this.heap[childInd],
          this.heap[parentInd],
        ];
        childInd = parentInd;
        parentInd = getParentInd(childInd);
      }
    }
  }
  getMinimum() {
    return this.heap[0];
  }
  remove() {
    const heap = this.heap;
    if (!this.heap.length) {
        return null;
    }
    let largest = this.heap[0];
    if (this.heap.length < 2) {
      this.heap.shift();
    } else {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();

      let current = 0;
      let leftChildIndex = 2 * current + 1;
      let rightChildIndex = leftChildIndex + 1;
      while (
        leftChildIndex < this.heap.length &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[current] > this.heap[leftChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }
        leftChildIndex = 2 * current + 1;
        rightChildIndex = leftChildIndex + 1;
      }
    }
    return largest;

  }
}

(function () {
  const minHeap = new MinHeap();
  minHeap.insert(6);
  minHeap.insert(5);
  minHeap.insert(10);
  minHeap.insert(2);
  minHeap.insert(7);
  minHeap.insert(8);
  minHeap.insert(3);
  console.log(minHeap.heap);
  minHeap.remove();
  console.log(minHeap.heap);
})();
