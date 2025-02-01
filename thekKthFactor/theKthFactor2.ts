export function kthFactor(n: number, k: number): number {
    
  let factorsArr: number[] = [];

  if(k > n) return -1;


  for(let i = 0; i <= n; i++){

    if(n % i == 0){
      factorsArr.push(i);
    }

  }

  return factorsArr[k - 1] ?? -1
};

console.log(kthFactor(12, 3))
console.log(kthFactor(7, 2))
console.log(kthFactor(4, 4))