function reverse(x: number): number {
    
    let result = 0;

    while(x != 0){
        
        let digit = x % 10;
        
        if(x > 0){
            x = Math.floor(x / 10);
            result = 10 * result + digit
        } else {
            x = Math.ceil(x / 10); // -12.3  
            result = 10 * result + digit
        }


    }

    // signed interger limits
    const UPPER_LIMIT = Math.pow(2, 31) - 1
    const UNDER_LIMIT = Math.pow(-2, 31)

    if(result > UPPER_LIMIT || result < UNDER_LIMIT) return 0
    return result

};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
