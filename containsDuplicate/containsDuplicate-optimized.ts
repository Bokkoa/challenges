function containsDuplicate(nums: number[]): boolean {

    const historySet = new Set<number>()

    for(let i = 0; i <= nums.length - 1; i++){
        if(historySet.has(nums[i])) return true
        historySet.add(nums[i])
    }

    return false

};


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([0,4,5,0,3,6]));
