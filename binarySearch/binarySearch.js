function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

(function () {
  const index1 = binarySearch([1, 3, 4, 5, 6, 6, 7, 8, 9], 3);
  console.log("--------binarySearch([1,3,4,5,6,6,7,8,9], 3)---------");
  console.log(index1);
  const index2 = binarySearch([1, 3, 4, 5, 6, 6, 7, 8, 9], 8);
  console.log("--------binarySearch([1,3,4,5,6,6,7,8,9], 8)---------");
  console.log(index2);
  const index3 = binarySearch([1, 3, 4, 5, 6, 6, 7, 8, 9], 2);
  console.log("--------binarySearch([1,3,4,5,6,6,7,8,9], 2)---------");
  console.log(index3);
})();
