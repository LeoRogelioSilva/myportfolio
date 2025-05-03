import { binary_search } from "../binary-search/binary-search.algorithm";

export const exponential_search = (arr: number[], target: number) => {
  if (arr[0] === target) return 0;
  let n = arr.length;
  let i = 1;
  while (i < n && arr[i] < target) {
    i *= 2;
  }
  if (arr[i] === target) return i;
  console.log(i);
  console.log(
    binary_search(arr.slice(Math.floor(i / 2), Math.min(i, n - 1)), target)
  );

  return binary_search(arr, target, Math.floor(i / 2), Math.min(i, n - 1))!;
};
