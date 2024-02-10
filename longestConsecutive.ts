function longestConsecutive(nums: number[]): number {
  let hashSet = new Set(nums);
  let result: number = 0;
  nums.forEach((element) => {
    let NewResult = 0;

    if (!hashSet.has(element - 1)) {
      NewResult++;
      element++;
      while (hashSet.has(element)) {
        NewResult++;
        element++;
      }
      if (NewResult > result) result = NewResult;
    }
  });

  return result;
}

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
