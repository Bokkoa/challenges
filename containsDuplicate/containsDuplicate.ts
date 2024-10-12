export function containsDuplicate(nums: number[]): boolean {

    const historyDict = {

    }

    for(let i = 0; i <= nums.length - 1; i++){
        if(historyDict[nums[i]] !== undefined){
            return true
        }
        historyDict[nums[i]] = nums[i]
    }

    return false;
};



console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([0,4,5,0,3,6]));
