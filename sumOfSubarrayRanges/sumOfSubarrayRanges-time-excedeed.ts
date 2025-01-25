function subArrayRanges(nums: number[]): number {
  
  const rangeFactor = nums.length;
  let rangeLeft = nums.length;
  let jump = 1;
  let i = 0;
  let sum = 0;

  while(rangeLeft > 0){

    if(i + jump <= rangeFactor){
      
      const range = nums.slice(i, i + jump);
      const firstN = Math.min(...range)
      const lastN = Math.max(...range)

      if(lastN < 0 || firstN < 0){
        
        if(firstN < 0  && lastN < 0 ) {
          
          const calc =  Math.abs(lastN) - Math.abs(firstN);
          sum += Math.abs(calc);

        } else if (firstN < 0){
          
          const calc = lastN + Math.abs(firstN)
          sum += Math.abs(calc);

        } else {
          
          const calc =  Math.abs(lastN) + firstN
          sum += Math.abs(calc);

        }
          
      } else {
        const calc = lastN - firstN;
        sum += Math.abs(calc);
      }
      
      i++;
    } else {
      i = 0;
      jump++;
      rangeLeft --;
    }

  }

  return sum;

};

console.log(subArrayRanges([1, 2, 3]))
console.log(subArrayRanges([1, 3, 3]))
console.log(subArrayRanges([4,-2,-3,4,1]))
