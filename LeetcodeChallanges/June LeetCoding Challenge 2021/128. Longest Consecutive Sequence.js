/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0

    nums.sort((a, b) => a - b)

    longestSeq = 1
    max = 1
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i - 1]){
            if(nums[i - 1]+1 == nums[i]){
                longestSeq += 1
            }
            else{
                max = Math.max(longestSeq,max)
                longestSeq = 1
            }
        }
    }
    return Math.max(longestSeq,max)
};

nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(nums))
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(nums))
nums = [1, 2, 0, 1]
console.log(longestConsecutive(nums))