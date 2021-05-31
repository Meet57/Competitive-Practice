/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    nums = Math.ceil(b.length / a.length);

    if (a.repeat(nums).includes(b)) {
        return nums;
    } else if (a.repeat(nums + 1).includes(b)) {
        return nums + 1;
    } else {
        return -1;
    }
};

console.log(repeatedStringMatch("abcd", "cdabcdabcdab"));
