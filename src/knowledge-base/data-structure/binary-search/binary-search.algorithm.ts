export const binary_search = (
  nums: number[],
  n: number,
  low = 0,
  high: number | null = null
) => {
  if (high === null) {
    high = nums.length - 1;
  }
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === n) {
      return mid;
    }
    if (nums[mid] < n) {
      low = mid + 1;
    }
    if (nums[mid] > n) {
      high = mid;
    }
  }
  return -1;
};
