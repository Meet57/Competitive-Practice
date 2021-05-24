/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let num = 0;
    for (let n of nums) {
        num ^= n;
    }
    return num;
}

console.log(singleNumber([3,4,1,2,1,2,3,1,2,23,1,2,23]))