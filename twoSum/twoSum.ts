function twoSum(nums: number[], target: number): number[] {
  if (nums.length <= 0) return [];

  let possibleValuesByResult = new Map<number, number>();

  for (let i = 0; i <= nums.length - 1; i++) {

    let expectedPair = target - nums[i];

    const previousValue = possibleValuesByResult.get(expectedPair)
    if (previousValue != undefined) {

      return [
        previousValue,
        i,
      ]

    }
    possibleValuesByResult.set(nums[i], i);
  }

  return [];
};