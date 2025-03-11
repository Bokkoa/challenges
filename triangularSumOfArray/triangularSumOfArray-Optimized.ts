export function triangularSum(nums: number[]): number {
    
  let i = 0;
  let aux = 0;
  while(nums.length > 1){


    if(i >= nums.length - 1){
      i = 0;
      nums.pop()
      continue;
    } 
    aux = nums[i + 1];

    if(nums[i] + aux >= 10){

      nums[i] = Math.floor( (nums[i] + aux) % 10)

    } else {
      nums[i] = nums[i] + aux
    }

 
      i++;

  }

  return nums[0]

};

console.log(triangularSum([1, 2, 3, 4, 5]))
console.log(triangularSum([5]))