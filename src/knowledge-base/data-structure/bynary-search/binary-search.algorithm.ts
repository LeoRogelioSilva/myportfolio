export const binary_search = (nums: number[], n: number) => {
  let low = 0;
  let high = nums.length - 1;
  let steps = 0;

  while (low <= high) {
    steps++;
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === n) {
      console.log(`Found ${n} in ${steps} steps`);
      return mid;
    }
    if (nums[mid] < n) {
      low = mid + 1;
    }
    if (nums[mid] > n) {
      high = mid;
    }
    if (steps > 100) return null;
  }
  return -1;
};
