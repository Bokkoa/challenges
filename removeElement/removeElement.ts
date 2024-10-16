export function removeElement(nums: number[], val: number): number {
  
  if(nums.length <= 0) return nums.length
 
  // sorting
  nums = nums.sort();

  let valIndexInArray = nums.indexOf(val);
  let spaceCounter = 0;
  const staticLength = nums.length;

  for(let i = valIndexInArray; i < staticLength; i ++){
    if(nums[i] === val){
      delete nums[i]
      spaceCounter ++;
    }
  }

  // rest of numbers
  const result = nums.length - spaceCounter;

  // creating the new array
  nums = [...nums.sort()]

  return result;
};


console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))