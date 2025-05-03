export const sliding_window = (s: string): number => {
  let l = 0;
  let r = 0;
  let max = 0;
  let map = new Map<string, number>();
  map.set(s[0], 1);

  while (r < s.length - 1) {
    r++;
    if (map.get(s[r])) {
      map.set(s[r], map.get(s[r])! + 1);
    } else {
      map.set(s[r], 1);
    }
    while (map.get(s[r]) && map.get(s[r]) === 3) {
      map.set(s[l], map.get(s[l])! - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
  }

  return max;
};
