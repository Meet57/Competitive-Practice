/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i = 0
    nums.forEach((ele) => {
        if (ele != nums[i]) {
            i++
            nums[i] = ele
        }
    })
    return ++i
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));