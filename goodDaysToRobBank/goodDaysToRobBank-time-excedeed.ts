function goodDaysToRobBank(security: number[], time: number): number[] {
  
  const goodDays: number[] = [];

  if(time <= 0) return security.map((_, index) => index);

  // we going to cutoff iteration over time range
  for(let i = time; i < security.length - time; i++){

    let isGoodDay = true;
    let prevLeft: number | null = null;
    let prevRight: number | null = null;

    for(let j = 1; j <= time; j++){
      // console.log({ day: i, guards: security[i]})
      // console.log({ left: i-j, guards: security[i - j]})
      // console.log({ right: i+j, guards: security[i + j]})

      if(
        security[i] > security[i + j] ||
        prevRight && prevRight > security[i + j]
      ) {
        isGoodDay = false; 
        break;
      } 
      else if(security[i] > security[i - j] || 
        prevLeft && prevLeft > security[i - j]){ 
        isGoodDay = false; 
        break;
      }

      prevLeft = security[i - j];
      prevRight = security[i + j];

    }

    if(isGoodDay) goodDays.push(i)

  }

  return goodDays;
};


// console.log(goodDaysToRobBank([5,3,3,3,5,6,2], 2));
// console.log(goodDaysToRobBank([1,1,1,1,1], 0));
// console.log(goodDaysToRobBank([1,2,3,4,5,6], 2));

// console.log(goodDaysToRobBank([1,2,3,4], 1))
console.log(goodDaysToRobBank([1,2,5,4,1,0,2,4,5,3,1,2,4,3,2,4,8], 2))