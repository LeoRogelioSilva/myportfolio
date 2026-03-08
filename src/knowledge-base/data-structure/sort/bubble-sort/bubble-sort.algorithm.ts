export const bubble_sort = (arr: number[]) => {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < size - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (isSorted) {
      return arr;
    }
  }

  return arr;
};
