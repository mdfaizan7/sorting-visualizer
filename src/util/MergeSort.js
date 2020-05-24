function merge(arr, start, mid, end, animations) {
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

function mergeSort(arr, l, r, animations) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    mergeSort(arr, l, m, animations);
    mergeSort(arr, m + 1, r, animations);

    merge(arr, l, m, r, animations);
    animations.push({ array: arr.slice(), ex1: l, ex2: r });
  }
}

export const mergeSortAnimations = (arr, startIdx, endIdx) => {
  const animations = [];
  mergeSort(arr, startIdx, endIdx, animations);

  return animations;
};
