function search(nums: number[], target: number): number {
    

    let res = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) res = i
    }

    return res;

};


search([4,5,6,7,0,1,2], 0)
search([4,5,6,7,0,1,2], 3)
search([1], 0)
