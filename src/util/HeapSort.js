function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const heapify = (arr, length, i, animations) => {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, largest, i);
    heapify(arr, length, largest, animations);
  }

  return largest;
};

export const heapSortAnimations = (arr) => {
  const animations = [];

  let length = arr.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    let largest = heapify(arr, length, i, animations);
    animations.push({ array: arr.slice(), ex1: largest, ex2: i });
    i -= 1;
    animations.push({ array: arr.slice(), ex1: largest, ex2: i });
  }

  while (k >= 0) {
    swap(arr, 0, k);
    let largest = heapify(arr, k, 0, animations);
    animations.push({ array: arr.slice(), ex1: largest, ex2: k });
    k -= 1;
    animations.push({ array: arr.slice(), ex1: largest, ex2: k });
  }

  return animations;
};
