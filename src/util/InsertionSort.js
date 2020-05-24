function insertionSort(arr, animations) {
  let key, j, i;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      animations.push({ array: arr.slice(), ex1: i, ex2: j });
    }
    arr[j + 1] = key;
  }
}

export const insertionSortAnimations = (arr) => {
  const animations = [];
  insertionSort(arr, animations);
  animations.push({ array: arr, ex1: -1, ex2: -1 });
  return animations;
};
