function insertionSort(arr, animations) {
  let key, j, i;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    let skip_animation = false;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      if (!skip_animation) {
        animations.push({ array: arr.slice(), ex1: i, ex2: j });
        skip_animation = true;
      } else skip_animation = false;
    }
    arr[j + 1] = key;
    animations.push({ array: arr.slice(), ex1: i, ex2: j });
  }
}

export const insertionSortAnimations = (arr) => {
  const animations = [];
  insertionSort(arr, animations);

  return animations;
};
