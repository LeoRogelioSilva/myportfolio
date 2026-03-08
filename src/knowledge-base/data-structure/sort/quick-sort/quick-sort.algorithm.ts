export const quick_sort = (arr: number[], left = 0, right = 0) => {
  if (left < right) {
    let pi = partition(arr, left, right);
    quick_sort(arr, left, pi - 1);
    quick_sort(arr, pi + 1, right);
  }
  return arr;
};

const partition = (arr: number[], left: number, right: number) => {
  const pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
};
