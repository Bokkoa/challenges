function kthFactor(n: number, k: number): number {
    
    if(k > n) return -1;

    let factorFoundTimes = 0;
    let result = -1;
    for(let i = 0; i <= n; i++ ){
        if(n % i == 0){
            factorFoundTimes++;
            if(factorFoundTimes == k) {
                result = i;
                break
            }
        }
    }

    return result;

};

const n = 12;  
const k = 3

console.log(kthFactor(n, k));