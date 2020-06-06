function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const selectionSortAnimations = (arr) => {
  const animations = [];
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    let skip_animation = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
      if (skip_animation === 0) {
        animations.push({ array: arr.slice(), ex1: j, ex2: i });
        skip_animation = 10;
      } else skip_animation--;
    }
    if (minIdx !== i) {
      swap(arr, minIdx, i);
    }
  }

  animations.push({ array: arr });

  return animations;
};
