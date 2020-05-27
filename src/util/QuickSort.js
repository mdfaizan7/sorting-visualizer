function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quickSort(array, left, right, animations) {
  if (left < right) {
    var pivotValue = array[right];
    var swappingIndex = left;

    for (var i = left; i < right; i++) {
      var currentValue = array[i];

      if (currentValue < pivotValue) {
        swap(array, i, swappingIndex);
        animations.push({
          array: array.slice(),
          pivot: right,
          ex1: i,
          ex2: swappingIndex,
        });
        swappingIndex++;
      }
    }
    swap(array, swappingIndex, right);
    animations.push({
      array: array.slice(),
      pivot: right,
      ex1: i,
      ex2: swappingIndex,
    });
    quickSort(array, left, swappingIndex - 1, animations);
    quickSort(array, swappingIndex + 1, right, animations);
  }
}

export const quickSortAnimations = (arr, startIdx, endIdx) => {
  const animations = [];
  quickSort(arr, startIdx, endIdx, animations);

  return animations;
};
