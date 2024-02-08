let containsDuplicate = (nums: number[]): boolean => {
  let result = new Map();
  for (let index = 0; index < nums.length; index++) {
    let oldVal: number | undefined = result.get(nums[index]);
    if (oldVal !== undefined) return true;
    result.set(nums[index], 1);
  }

  return false;
};
