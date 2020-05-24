const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

export const mergeSortAlgo = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortAlgo(arr.slice(0, mid));
  let right = mergeSortAlgo(arr.slice(mid));

  let intermediate = merge(left, right);
  console.log(intermediate.slice());
  return intermediate;
};
