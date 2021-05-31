/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    prev = nums[0]
    for(let i=1;i<nums.length;i++){
        nums[i] += nums[i-1]
    }
    return nums
};