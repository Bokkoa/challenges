export function search(nums: number[], target: number): number {

    let left = 0
    let right = nums.length -1;


    // check if pivot is 
    while (left <= right) {

        let mid = left + (right - left) / 2

        if(nums[mid] == target){
            return mid
        }
    
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid +1;
            }
        }

        else {

            if(nums[right] > target && target > nums[mid]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

    }

    return - 1;

};


console.log(
    search([4, 5, 6, 7, 0, 1, 2], 0)
)

console.log(
    search([4, 5, 6, 7, 0, 1, 2], 3)
)

console.log(

    search([1], 0)

)

console.log(
    search(

        [4,5,6,7,0,1,2],
        0
    )
)
