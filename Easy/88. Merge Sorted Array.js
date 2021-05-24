/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n);

    var i = 0
    var j = 0

    while (j < n) {
        if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j])
            i++
            j++
        } else {
            i++
        }
    }

};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)