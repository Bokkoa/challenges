function twoSum(nums: number[], target: number): number[] {
  if (nums.length <= 0) return [];

  let possibleValuesByResult = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {

    let currentValue = nums[index];
    let restValue = target - currentValue;

    const indexOfRest = possibleValuesByResult.get(restValue)
    if (indexOfRest != undefined) {

      return [
        indexOfRest,
        index,
      ]

    }
    possibleValuesByResult.set(currentValue, index);
  }

  return [];
};
