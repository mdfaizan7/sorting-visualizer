let animations = [];

function merge(arr, start, mid, end) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
      animations.push({ array: arr.slice(), ex1: start, ex2: start2 });
    } else {
      let value = arr[start2];
      let index = start2;

      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;
      animations.push({ array: arr.slice(), ex1: start, ex2: index });
      start++;
      mid++;
      start2++;
    }
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
    animations.push({ array: arr.slice(), ex1: l, ex2: r });
  }
}

export const mergeSortAlgo = (arr, startIdx, endIdx) => {
  mergeSort(arr, startIdx, endIdx);
  // let sortingAnimations = animations;
  // animations = [];
  // return sortingAnimations;
  return animations;
};
