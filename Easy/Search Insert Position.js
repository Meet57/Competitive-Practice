/**
 * @param {number} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target, start, end) {
    if (start > end) return start

    var mid = Math.floor((start + end) / 2)

    if (nums[mid] == target) return mid

    if (nums[mid] > target) {
        return binarySearch(nums, target, start, mid - 1)
    }

    if (nums[mid] < target) {
        return binarySearch(nums, target, mid + 1, end)
    }
}
var searchInsert = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};



console.log(searchInsert([1, 2, 2, 3, 5, 6, 8, 9], 4));