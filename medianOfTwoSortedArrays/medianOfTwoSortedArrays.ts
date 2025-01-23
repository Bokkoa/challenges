function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  
  const totalLength = nums1.length + nums2.length;
  const newArr = [...nums1, ...nums2].sort((a, b) => a - b);

  let median;
  if(totalLength % 2 === 0){

    const left = newArr[Math.floor(totalLength / 2) - 1] 
    const right =  newArr[Math.ceil(totalLength / 2)]

      median = ( left + right) / 2
  }
  else {
    median = newArr[Math.floor(totalLength / 2)]
  }

  return median
};


const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6,7,8,9,10,11,12,13,14,15,16,17]))