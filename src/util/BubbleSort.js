function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const bubbleSortAnimations = (arr) => {
  const animations = [];

  let i,
    j,
    n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let skip_animation = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      if (!skip_animation) {
        animations.push({ array: arr.slice(), ex1: j, ex2: j + 1 });
        skip_animation = true;
      } else skip_animation = false;
    }
  }
  animations.push({ array: arr.slice(), ex1: j, ex2: j + 1 });

  return animations;
};
