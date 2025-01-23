export function minimumOperations(nums: number[]): number {
  let x = 0;
  let done = false

 while(!done) {

    if(!nums.some( n => n > 0)){
      done = true;
      break;
    }


    // getting the min
    let temp = 0;
    for( let n of nums){

      if(temp === 0){
        temp = n;
        continue;
      }

      if(n < temp && n > 0){
        temp = n;
      } 
    }

    nums = nums.map( n => {

      if(n > 0){
        n = n - temp;
      }

      return n;
    });

    x++;
  }
  
  return x;
};

console.log(minimumOperations([1,5,0,3,5]))